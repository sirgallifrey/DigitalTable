import * as React from 'react';
import { useStoreState } from 'src/store/store';

export function CharacterList() {

	const entitiesMap = useStoreState((state) => state.entities.entitiesMap);

	return (
		<div>
			<ul>
			{ Object.values(entitiesMap).map((entity) => (
				<li key={entity.id}>
					<span>{entity.name}</span>
				</li>
			)) }
			</ul>
		</div>
	);
} 