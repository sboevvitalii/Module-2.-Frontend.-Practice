import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const LogoTitleLarge = styled.div`
	font-size: 48px;
	font-weight: 600;
	margin-top: 17px;
	margin-left: 10px;
`;

const LogoTitleSmall = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-code" size="70px" margin="17px 10px 0 0" />
		<div>
			<LogoTitleLarge>Блог</LogoTitleLarge>
			<LogoTitleSmall>вэб-разработчика</LogoTitleSmall>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -25px;
`;
