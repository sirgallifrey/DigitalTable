import { entitiesModel, IEntitiesModel } from './entities';
import { UIModel, IUIModel } from './ui';
import { createStore, createTypedHooks } from 'easy-peasy';

interface IStoreModel {
	entities: IEntitiesModel;
	UI: IUIModel;
}

const storeModel: IStoreModel = {
	entities: entitiesModel,
	UI: UIModel
}

export const store = createStore(storeModel);

const typedHooks = createTypedHooks<IStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;