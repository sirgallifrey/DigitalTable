import { IEntity } from 'src/domain/entities/entity';
import { EntityType } from 'src/domain/entities/entityType';
import { IProperties } from 'src/domain/entities/properties';
import { Attribute } from 'src/domain/entities/attribute';
import { Action, action, Thunk, thunk } from 'easy-peasy';
import { createEntity, updateEntity } from 'src/api/entityClient';

export interface IAddEntity {
	name: string,
	description: string,
	type: EntityType,
	properties: IProperties
}

export interface IUpdateEntityAttributePayload {
	entityId: string,
	attributeId: string,
	attribute: Attribute
}

export interface IAddEntityIndexedAttributePayload {
	entityId: string,
	indexId: string,
	attribute: Attribute
}

export interface IRemoveEntityIndexedAttributePayload {
	entityId: string,
	indexId: string,
	attributeId: string
}

export interface IEntitiesModel {
	entitiesMap: Record<string, IEntity>,
	//thunks
	createEntity: Thunk<IEntitiesModel, IAddEntity>,
	saveEntity: Thunk<IEntitiesModel, IEntity>,
	//actions
	addEntity: Action<IEntitiesModel, IEntity>,
	updateEntity: Action<IEntitiesModel, IEntity>,
	updateEntityAttribute: Action<IEntitiesModel, IUpdateEntityAttributePayload>
	addIndexedAttribute: Action<IEntitiesModel, IAddEntityIndexedAttributePayload>
	removeIndexedAttribute: Action<IEntitiesModel, IRemoveEntityIndexedAttributePayload>
}

export const entitiesModel: IEntitiesModel = {
	entitiesMap: {},
	//thunks
	createEntity: thunk(async (actions, payload) => {
		const entity = await createEntity(payload);
		actions.addEntity(entity);
	}),
	saveEntity: thunk(async (actions, payload) => {
		const entity = await updateEntity(payload.id, {
			name: payload.name,
			description: payload.description,
			properties: payload.properties
		});
		actions.addEntity(entity);
	}),
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
