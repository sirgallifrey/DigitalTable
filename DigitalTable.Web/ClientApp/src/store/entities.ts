import { IEntity } from 'src/entities/entity';
import { Attribute } from 'src/entities/attribute';
import { Action, action } from 'easy-peasy';

export interface IUpdateEntityAttributePayload {
	entityId: number,
	attributeId: string,
	attribute: Attribute
}

export interface IAddEntityIndexedAttributePayload {
	entityId: number,
	indexId: string,
	attribute: Attribute
}

export interface IRemoveEntityIndexedAttributePayload {
	entityId: number,
	indexId: string,
	attributeId: string
}

export interface IEntitiesModel {
	entitiesMap: Record<number, IEntity>,
	addEntity: Action<IEntitiesModel, IEntity>,
	updateEntity: Action<IEntitiesModel, IEntity>,
	updateEntityAttribute: Action<IEntitiesModel, IUpdateEntityAttributePayload>
	addIndexedAttribute: Action<IEntitiesModel, IAddEntityIndexedAttributePayload>
	removeIndexedAttribute: Action<IEntitiesModel, IRemoveEntityIndexedAttributePayload>
}

export const entitiesModel: IEntitiesModel = {
	entitiesMap: {},
	//actions
	addEntity: action((state, payload) => {
		state.entitiesMap[payload.id] = payload;
	}),
	updateEntity: action((state, payload) => {
		state.entitiesMap[payload.id] = payload;
	}),
	addIndexedAttribute: action((state, { entityId, indexId, attribute }) => {
		const entity = state.entitiesMap[entityId];
		const attrId = (Math.random() * 1000000) + '';
		if (!entity.properties.indexes[indexId]) {
			entity.properties.indexes[indexId] = [attrId]
		} else {
			entity.properties.indexes[indexId].push(attrId);
		}
		entity.properties.attributes[attrId] = attribute;
	}),
	removeIndexedAttribute: action((state, { entityId, indexId, attributeId }) => {
		const entity = state.entitiesMap[entityId];
		if (entity.properties.indexes[indexId]) {
			entity.properties.indexes[indexId] = entity.properties.indexes[indexId].filter((id) => id !== attributeId);
		}
		delete entity.properties.attributes[attributeId];
	}),
	updateEntityAttribute: action((state, { entityId, attributeId, attribute }) => {
		state.entitiesMap[entityId].properties.attributes[attributeId] = attribute;
	})
};
