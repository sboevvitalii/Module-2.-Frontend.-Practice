import { useEffect } from 'react';
import { useStore } from 'react-redux';

export const useResetForm = (reset) => {
	const store = useStore();

	useEffect(() => {
		let currentWasLogaut = store.getState().app.wasLogout;
		return store.subscribe(() => {
			let prevWasLogaut = currentWasLogaut;
			currentWasLogaut = store.getState().app.wasLogout;

			if (currentWasLogaut !== prevWasLogaut) {
				reset();
			}
		});
	}, [reset, store]);
};
