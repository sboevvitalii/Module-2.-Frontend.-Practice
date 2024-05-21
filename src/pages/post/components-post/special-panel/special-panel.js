import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openModalWindow, CLOSE_MODAL_WINDOW, removePostAsync } from '../../../../action';
import { useServerRequest } from '../../../../hooks';
import { checkAccess } from '../../../../utils';
import { Icon } from '../../../../components';
import { ROLE } from '../../../../constants';
import { selectUserRole } from '../../../../selectors';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModalWindow({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate(`/`);
					});
					dispatch(CLOSE_MODAL_WINDOW);
				},
				onCancel: () => dispatch(CLOSE_MODAL_WINDOW),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={className}>
			<div className="special-panel">
				<div className="published-at">
					{publishedAt && (
						<Icon inactive={true} id="fa-calendar-o" margin="0 10px 0 0 " />
					)}
					{publishedAt}
				</div>
				{isAdmin && (
					<div className="buttons-panel">
						{editButton}
						{publishedAt && (
							<Icon
								id="fa-trash-o"
								margin="0 10px 0 0 "
								onClick={() => onPostRemove(id)}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: ${({ margin }) => margin};
		font-size: 18px;
	}
	& .published-at {
		display: flex;
		font-size: 18px;
	}
	& i {
		position: relative;
		top: -5px;
	}
	& .buttons-panel {
		display: flex;
		font-size: 21px;
	}
`;

SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
