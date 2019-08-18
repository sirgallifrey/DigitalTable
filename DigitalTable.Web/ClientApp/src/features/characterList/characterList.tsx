import * as React from 'react';
import { useStoreState, useStoreActions } from 'src/store/store';


export function CharacterList() {

	const entitiesMap = useStoreState((state) => state.entities.entitiesMap);
	const changeCharacterSheetState = useStoreActions((actions) => 
		actions.UI.changeCharacterSheetState
	);

	function openCharacterSheet (id) {
		changeCharacterSheetState(
			{
				entityId: id,
				isVisible: true
			}
		)
	}

	return (
		<div>
			<ul>
			{ Object.values(entitiesMap).map((entity) => (
				<li key={entity.id}>
					<span>{entity.name}</span>
					<button onClick={() => openCharacterSheet(entity.id)} >View</button>
				</li>
			)) }
			</ul>
		</div>
	);
} 