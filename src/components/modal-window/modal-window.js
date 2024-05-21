import { useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import styled from 'styled-components';

const ModalWindowContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	const text = useSelector(selectModalText);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="modal-box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const ModalWindow = styled(ModalWindowContainer)`
	position: fixed;
	z-index: 20;

	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		background-color: rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 100%;
		position: absolute;
	}
	& .modal-box {
		width: 300px;
		margin: 0px auto;
		padding: 0 20px 20px;
		text-align: center;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #fff;
		border: 1px solid #000;
		position: relative;
		z-index: 30;
	}

	& .buttons {
		display: flex;
		& button {
			margin: 5px;
			cursor: pointer;
		}
	}
`;
