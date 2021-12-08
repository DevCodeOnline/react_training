import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return <header className={s.header}>
		<img src="https://i.pinimg.com/originals/57/2e/4f/572e4f51d0a4d67669784df53026b5a7.png" />
		<div className={s.loginBlock}>
			{ props.isAuth ? 'Логин: ' + props.login :
				<NavLink to={'/login'}>Login</NavLink>
			}
		</div>
	</header>
};

export default Header;