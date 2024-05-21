import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContauner = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContauner)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	border: 1px solid #000;
	margin-bottom: 10px;
	padding: 10px;
	font-size: 18px;
`;

Input.propTypes = {
	width: PropTypes.string,
};
