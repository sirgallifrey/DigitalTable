import * as React from 'react';
import { presenter } from './characterSheetPresenter.css';
import { useStoreState } from 'src/store/store';

export interface CharacterSheetPresenterProps {
	children: React.ReactNode
}

export function CharacterSheetPresenter ({ children }: CharacterSheetPresenterProps) {

	const state = useStoreState((state) => state.UI.characterSheet);

	if (state.isVisible) {
		return (
			<div className={presenter}>
				{children}
			</div>
		);
	}
	return null;
}