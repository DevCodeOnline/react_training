import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import StoreContext from "../../StoreContext";

const Sidebar = (props) => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().sidebar;

					let links =  state.menu.map(d => <li><NavLink to={d.to}>{d.text}</NavLink></li>);
					let friends = state.friends.map(d => <li><a href="#"><img src={d.img} /><p>{d.name}</p></a></li>);

					return (
						<div className={s.sidebar}>
							<nav className={s.menu}>
								<ul>
									{links}
								</ul>
							</nav>
							<div className={s.friends}>
								<h3>Friends</h3>
								<ul>
									{friends}
								</ul>
							</div>
						</div>
					);
				}
			}
		</StoreContext.Consumer>
	)
}

export default Sidebar;