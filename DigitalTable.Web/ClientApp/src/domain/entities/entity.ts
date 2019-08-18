import { EntityType } from './entityType';
import { IProperties } from './properties'

export interface IEntity {
    id: string;
    name: string;
    description: string;
    type: EntityType;
    properties: IProperties;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}