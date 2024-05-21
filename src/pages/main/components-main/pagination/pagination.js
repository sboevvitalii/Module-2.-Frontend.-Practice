import PropTypes from 'prop-types';
import { Button } from '../../../../components';
import styled from 'styled-components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	margin: 25px 0;
	& .current-page {
		margin: 0 5px;
		border-radius: 15px;
		justify-content: center;
		font-size: 14px;
		font-weight: 500;
		border: 1px solid #000;
		width: 120px;
		height: 32px;
		text-align: center;
		display: flex;
		align-items: center;
	}
	& button {
		margin: 0 5px;
		border-radius: 15px;
		font-size: 14px;
		font-weight: 500;
		width: 120px;
		& :hover {
			cursor: pointer;
		}
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
