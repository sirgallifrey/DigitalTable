import * as React from 'react';
import { wrapper } from './borderBox.css';

export interface BorderBox {
	children: React.ReactNode
} 

export function BorderBox ({ children }: BorderBox) {
	return (
		<div className={wrapper}>
			{ children }
		</div>
	);
}