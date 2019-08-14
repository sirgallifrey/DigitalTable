import * as React from 'react';
import { bonus, bonusTitle, bonusValue, bonusWrapper } from './bonus.css';

import { BorderBox } from 'src/features/characterSheets/fifthEdition/components/borderBox/borderBox';

export interface IBonusProps {
	name: string,
	value: string
}

export function Bonus({ name, value }: IBonusProps) {
	return (
		<div className={bonusWrapper}>
			<BorderBox>
				<div className={bonus}>
					<div className={bonusValue}>
						<input type="text" />
					</div>
					<div className={bonusTitle}>{name}</div>
				</div>
			</BorderBox>
		</div>
	)
}
