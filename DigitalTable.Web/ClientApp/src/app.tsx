import * as React from 'react';

import { CharacterSheetPresenter } from 'src/features/characterSheetPresenter/characterSheetPresenter';
import { SheetLayout } from 'src/features/characterSheets/fifthEdition/sheetLayout/sheetLayout';
import { CharacterModal } from 'src/features/characterModal/characterModal';

export function App () {
	return (
		<>
		<CharacterSheetPresenter>
			<SheetLayout/>
		</CharacterSheetPresenter>
		<CharacterModal/>
		</>
	);
}
