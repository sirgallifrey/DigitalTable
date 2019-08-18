import { Action, action, Thunk, thunk } from 'easy-peasy';
import { createEntity, updateEntity } from 'src/api/entityClient';

// TODO: have to think more about that....
export enum uiState {
	Open,
	Closed,
	Started,
	Loading
}

export interface ICharacterSheet {
	entityId: string,
	isVisible: boolean
}

export interface IUIModel {
	characterSheet: ICharacterSheet
	// actions

	changeCharacterSheetState: Action<IUIModel, ICharacterSheet>
}

export const UIModel: IUIModel = {
	characterSheet: {
		entityId: '',
		isVisible: false
	},

	//actions
	changeCharacterSheetState: action((state, payload) => {
		state.characterSheet = payload;
	})
};
