import Vue from 'vue'
import {uid} from 'quasar'

const state = {
	tasks: {
		'ID1': {
			name: 'Grade 8210 assignment 5S0',
			completed: false,
			dueDate: '2020/10/12',
			dueTime: '10:30'
		},
		'ID2': {
			name: 'Grade 4900 Assign3P1',
			completed: false,
			dueDate: '2020/10/13',
			dueTime: '14:00'
		},
		'ID3': {
			name: 'Grade CIST 2100 Assign 2P1',
			completed: false,
			dueDate: '2020/10/14',
			dueTime: '16:00'
		}	
	}
}

const mutations = {
	updateTask(state, payload) {
		Object.assign(state.tasks[payload.id], payload.updates)
	},
	deleteTask(state, id) {
		Vue.delete(state.tasks, id)
	},
	addTask(state, payload) {
		Vue.set(state.tasks, payload.id, payload.task)
	}
}

const actions = {
	updateTask({ commit }, payload) {
		commit('updateTask', payload)
	},
	deleteTask({ commit }, id) {
		commit('deleteTask', id)
	},
	addTask({ commit }, task) {
		let taskId = uid()
		let payload = {
			id: taskId,
			task: task
		}
		commit('addTask', payload)
	}
}

const getters = {
	tasks: (state) => {
		return state.tasks
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}



