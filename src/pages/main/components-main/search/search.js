import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовку..."
				onChange={onChange}
			/>
			<Icon inactive={true} id="fa-search" size="18px" margin="0 10px 0 10px " />
		</div>
	);
};
export const Search = styled(SearchContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 40px 0;
	& > input {
		width: 340px;
		height: 40px;
		margin: 0;
	}
	& > i {
		position: absolute;
		top: 50%;
		right: 5px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
