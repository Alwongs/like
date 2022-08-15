import { getDatabase, set, ref, child, get, update, remove } from "firebase/database";
import { getStorage, ref as stRef, getDownloadURL , uploadBytesResumable} from "firebase/storage"
import sortList from '../../funcs/sort.js'

export default {

    getters: {
        limitedPostList(state) {
            return state.postList.slice(0, 3);
        },
        postList(state) {
            return state.postList;
        },
        post(state) {
            return state.post;
        },
        postImageList(state) {
            return state.postImageList;
        },
        isAbleUploadButton(state) {
            return state.isAbleUploadButton
        }
    },
    state: {
        postList: [],
        post: {},
        postImageList: [],
        isAbleUploadButton: true
    },
    mutations: {
        UPDATE_POSTS(state, payload) {
            state.postList = payload
        },
        UPDATE_POST(state, payload) {
            state.post = payload
        },
        UPDATE_POST_IMAGE_LIST(state, payload) {
            state.postImageList = payload
        },
        ENABLE_UPLOAD_BUTTON(state, payload) {
            state.isAbleUploadButton = payload
        },
    },
    actions: {
        async removePost({commit, dispatch}, id) {
            const postId = id;
            const db = getDatabase();
            commit('SET_PROCESSING', true);
            await remove(ref(db, `posts/${postId}`));
            dispatch('getPostList');
            commit('SET_PROCESSING', false);
        },

        async getPostList({commit}) { 
            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());

            await get(child(dbRef, `posts`)).then((data) => {
                if (data.exists()) {
                    const posts = data.val()                 
                    const postArray = Object.keys(posts).map(key => ({...posts[key], id: key}));
                    const sortedPostList = sortList(postArray)                    
                    commit('UPDATE_POSTS', sortedPostList);
                    commit('SET_PROCESSING', false);
                } else {
                    commit('UPDATE_POSTS', [])
                    commit('SET_PROCESSING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },   

        async getPost({commit}, id) { 
            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());

            await get(child(dbRef, `posts/${id}`)).then((data) => {
                if (data.exists()) {
                    const post = data.val()                      
                    commit('UPDATE_POST', post);
                    commit('SET_PROCESSING', false);
                } else {
                    commit('UPDATE_POST', {})
                    commit('SET_PROCESSING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },   
        
        uploadImages({commit}, files) {
            commit('ENABLE_UPLOAD_BUTTON', false) 
            const preview = document.querySelector('.preview-group')
            const storage = getStorage()
            let counter = 0
            let urlList = []

            files.forEach((file, index) => {

                const progressBlock = preview.querySelectorAll('.preview-progress-info')[index]

                const storageRef = stRef(storage, `images/${file.name}`)
                const uploadTask = uploadBytesResumable(storageRef, file)
                
                uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0)

                    progressBlock.style.width = progress + '%'
                    progressBlock.textContent = progress + '%'
                    if (parseInt(progress) === 100) {
                        counter++
                    }
                    console.log(counter + ' from ' + files.length)
                    if (counter === files.length) {
                        console.log('success!')
                    }
                }, (error) => {
                    console.log(error)
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        urlList.push(downloadURL)
                        if (urlList.length === files.length) {
                            commit('UPDATE_POST_IMAGE_LIST', urlList)
                        }
                    })                   
                }) 

            })  
        }, 
 
        async savePost({dispatch}, post) { 
            console.log(post)

            const postId = Date.now();
            const db = getDatabase();

            await set(ref(db, `posts/${postId}`), post);
            dispatch('getPostList');   
            
        },
        
        async updatePost({commit}, post) {
            try {              
                const db = getDatabase();
                const updates = {};
                updates[`posts/${post.id}`] = post;

                return await update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e)
                throw e                
            }                
        },





        downloadImages(_, files) {
            const storage = getStorage();            
            files.forEach(file => {
                getDownloadURL(ref(storage, `images/${file.name}`))
                .then((url) => {
                    console.log(url)
                })
                .catch((error) => {
                    console.log(error)
                });  
            })            
        }
    }
}
