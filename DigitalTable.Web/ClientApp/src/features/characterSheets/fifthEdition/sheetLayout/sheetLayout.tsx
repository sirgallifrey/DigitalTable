import * as React from 'react';
import { grid } from './sheetLayout.css';

import { Header } from 'src/features/characterSheets/fifthEdition/header/header';
import { Attributes } from 'src/features/characterSheets/fifthEdition/attributes/attributes';
import { Bonuses } from 'src/features/characterSheets/fifthEdition/bonuses/bonuses';
import { SavingThrows } from 'src/features/characterSheets/fifthEdition/savingThrows/savingThrows';
import { Skills } from 'src/features/characterSheets/fifthEdition/skills/skills';

export function SheetLayout () {
	return (
		<div className={grid}>
			<Header/>
			<Attributes/>
			<Bonuses/>
			<SavingThrows/>
			<Skills/>
		</div>
	)
}
