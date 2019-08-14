import * as React from 'react';
import { attribute, attributeWrapper, attributeValue } from './attributes.css';

import { BorderBox } from 'src/features/characterSheets/fifthEdition/components/borderBox/borderBox';

export interface IAttributeProps {
	name: String,
	value: Number,
	mod: String,
}

export function Attribute({ name, value, mod }: IAttributeProps) {
	return (
		<div className={attributeWrapper}>
		<BorderBox>
			<div className={attribute}>
				<span>{name}</span>
				<div className={attributeValue}>
					<input type="text"/>
				</div>
				<div>
					<span>{mod}</span>
				</div>

			</div>
		</BorderBox>
		</div>
	)
}
