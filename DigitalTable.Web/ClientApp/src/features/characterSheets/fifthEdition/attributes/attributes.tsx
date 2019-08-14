import * as React from 'react';
import { wrapper } from './attributes.css';
import { Attribute } from './attribute';

export function Attributes () {
	return (
		<div className={wrapper}>
			<Attribute name="strength" value={18} mod="+ 4" />
			<Attribute name="dexterity" value={12} mod="+ 1" />
			<Attribute name="constitution" value={11} mod="+ 0" />
			<Attribute name="inteligence" value={15} mod="+ 2" />
			<Attribute name="charisma" value={8} mod="- 1" />
			<Attribute name="wisdom" value={10} mod="+ 0" />
		</div>
	)
}