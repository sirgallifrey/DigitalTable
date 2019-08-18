import { EntityType } from 'src/domain/entities/entityType';
import { IProperties } from 'src/domain/entities/properties';

export type CreateCharacter = {
	name: string,
	description: string,
	properties: IProperties
}

export type CreateEntity = {
	name: string,
	description: string,
	type: EntityType,
	properties: IProperties
}

export type UpdateEntity = {
	name: string,
	description: string,
	properties: IProperties
}
