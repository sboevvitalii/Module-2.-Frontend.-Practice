import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Discription = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Вэб-технологии <br /> Написание кода <br /> Разбор оштбок
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: 0 -2px 17px #000;
	z-index: 10;
`;
