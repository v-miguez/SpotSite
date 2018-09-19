import { tassign } from 'tassign'
import { GUARDAR_TOKEN, BORRAR_TOKEN } from './actions'

//ESta interfaz define la estructura de datos de nuestra Store
//Cuales son sus nombres y que tipo tienen

export interface IAppState{

	token: string
	alias: string
}


export const INITIAL_STATE: IAppState = {

	token: '',
	alias: ''
}


export function rootReducer(state, action){

	switch (action.type) {
		case GUARDAR_TOKEN:
			return tassign(state, action.data)
			
		case BORRAR_TOKEN:
			return tassign(state, action.data)
	
		}

		return state

	}
