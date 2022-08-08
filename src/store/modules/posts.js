import { getDatabase, set, ref, child, get, update, remove } from "firebase/database";
import sortList from '../../funcs/sort.js'

export default {

    getters: {
        limitedPostList(state) {
            return state.postList.slice(0, 3);
        },
        postList(state) {
            return state.postList;
        }
    },
    state: {
        postList: []
    },
    mutations: {
        UPDATE_POSTS(state, payload) {
            state.postList = payload
        }
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

        async savePost({dispatch}, post) { 
            const postId = Date.now();
            const db = getDatabase();

            await set(ref(db, `posts/${postId}`), post);
            dispatch('getPostList');            
        },

        getPostList({commit}) { 

            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());

            get(child(dbRef, `posts`)).then((data) => {

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
        }         
    }
}
