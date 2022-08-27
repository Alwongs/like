import { getDatabase, set, ref, child, get, update, remove } from "firebase/database"
import sortByRates from '../../functions/sortUpToDown.js'

export default {

    getters: {
        taskList(state) {
            return state.taskList;
        },
        task(state) {
            return state.task;
        },
    },
    state: {
        taskList: [],
        task: {},
    },
    mutations: {
        UPDATE_TASKS(state, payload) {
            state.taskList = payload
        },
        UPDATE_TASK(state, payload) {
            state.task = payload
        },
    },
    actions: {
        async removeTask({commit, dispatch}, id) {
            commit('SET_PROCESSING', true);            
            const taskId = id;
            const db = getDatabase();
            await remove(ref(db, `tasks/${taskId}`));
            await dispatch('getTaskList');
            commit('SET_PROCESSING', false);
        },

        async getTaskList({commit}) { 
            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());

            await get(child(dbRef, `tasks`)).then((data) => {
                if (data.exists()) {
                    const tasks = data.val()                 
                    const taskArray = Object.keys(tasks).map(key => ({...tasks[key], id: key}));  
                    const sortedList = sortByRates(taskArray)                 
                    commit('UPDATE_TASKS', sortedList);
                    commit('SET_PROCESSING', false);
                } else {
                    commit('UPDATE_TASKS', [])
                    commit('SET_PROCESSING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },   

        async getTask({commit}, id) { 
            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());

            await get(child(dbRef, `tasks/${id}`)).then((data) => {
                if (data.exists()) {
                    const task = data.val()                      
                    commit('UPDATE_TASK', task);
                    commit('SET_PROCESSING', false);
                } else {
                    commit('UPDATE_TASK', {})
                    commit('SET_PROCESSING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },    
 
        async saveTask({commit, dispatch}, task) { 
            commit('SET_PROCESSING', true);
            const taskId = Date.now();
            const db = getDatabase();
            task.id = taskId

            await set(ref(db, `tasks/${taskId}`), task);
            dispatch('getTaskList'); 
            commit('SET_PROCESSING', false);            
        },
        
        async updateTask({commit}, task) {
            try {              
                const db = getDatabase();
                const updates = {};
                updates[`tasks/${task.id}`] = task;

                return await update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e)
                throw e                
            }                
        },
    }   
}
