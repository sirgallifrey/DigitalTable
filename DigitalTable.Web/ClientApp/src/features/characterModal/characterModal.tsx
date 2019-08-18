import * as React from 'react';
import { CharacterList } from 'src/features/characterList/characterList';
import { useStoreActions } from 'src/store/store';
import { EntityType } from 'src/domain/entities/entityType';

export function CharacterModal() {

	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	const createEntity = useStoreActions((actions) => actions.entities.createEntity);

	function createCharacter() {
		createEntity({
			name,
			description,
			properties: {
				attributes: {},
				indexes: {}
			},
			type: EntityType.character
		});
	}

	return (
		<div>
			<CharacterList/>
			<hr/>
			
			<div>
				<label>Name:
				<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
				</label>
			</div>

			<div>
				<label>description:
				<input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
				</label>
			</div>

			<button onClick={createCharacter}>Add new character</button>
		</div>
	);
}
