import * as React from 'react';
import { CharacterList } from 'src/features/characterList/characterList';

export function CharacterModal() {

	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');

	return (
		<div>
			<CharacterList/>
			<hr/>
			<label>Name:</label>
			<input type="text"/>
			<button>Add new character</button>
		</div>
	);
}
