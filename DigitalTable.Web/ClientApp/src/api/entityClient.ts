import { CreateEntity, UpdateEntity } from 'src/domain/models/entity';
import { get, post, put } from 'src/api/api';
import { IEntity } from 'src/domain/entities/entity';

const basePath = 'api/entity';

export async function getEntity(id: number): Promise<IEntity> {
	return get(`${basePath}/${id}`);
}

export async function getAllEntities(): Promise<IEntity[]> {
	return get(basePath);
}

export async function createEntity(entity: CreateEntity): Promise<IEntity> {
	return post(basePath, entity);
}

export async function updateEntity(id: number, entity: UpdateEntity): Promise<IEntity> {
	return put(`${basePath}/${id}`, entity);
}