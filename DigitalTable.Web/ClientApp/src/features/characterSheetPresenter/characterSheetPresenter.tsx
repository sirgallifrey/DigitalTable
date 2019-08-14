import * as React from 'react';
import { presenter } from './characterSheetPresenter.css';

export interface CharacterSheetPresenterProps {
	children: React.ReactNode
}

export function CharacterSheetPresenter ({ children }: CharacterSheetPresenterProps) {
	return (
		<div className={presenter}>
			{children}
		</div>
	);
}