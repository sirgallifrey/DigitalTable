import { CreateEntity, UpdateEntity } from 'src/domain/models/entity';
import { get, post, put } from 'src/api/api';

const basePath = 'api/entity';

export async function getEntity(id: number) {
	return get(`${basePath}/${id}`);
}

export async function getAllEntities() {
	return get(basePath);
}

export async function createEntity(entity: CreateEntity) {
	return post(basePath, entity);
}

export async function updateEntity(id: number, entity: UpdateEntity) {
	return put(`${basePath}/${id}`, entity);
}