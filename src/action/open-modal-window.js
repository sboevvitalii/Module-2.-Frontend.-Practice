import { ACTION_TYPE } from './action-type';

export const openModalWindow = (modalParams) => ({
	type: ACTION_TYPE.OPEN_MODAL_WINDOW,
	payload: modalParams,
});
