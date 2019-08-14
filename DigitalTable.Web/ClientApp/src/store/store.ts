import { entitiesModel, IEntitiesModel } from './entities';
import { createStore, createTypedHooks } from 'easy-peasy';

interface IStoreModel {
	entities: IEntitiesModel;
}

const storeModel: IStoreModel = {
	entities: entitiesModel
}

export const store = createStore(storeModel);

const typedHooks = createTypedHooks<IStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;