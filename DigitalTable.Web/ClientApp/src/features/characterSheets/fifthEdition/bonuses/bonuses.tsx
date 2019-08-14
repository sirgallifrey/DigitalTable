import * as React from 'react';
import { wrapper } from './bonus.css';
import { Bonus } from './bonus';

export function Bonuses () {
	return (
		<div className={wrapper}>
			<Bonus name="Inspiration" value="1" />
			<Bonus name="Proficiency Bonus" value="+ 4" />
		</div>
	)
}