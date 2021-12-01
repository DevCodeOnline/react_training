import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/boy.png";

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    let list = props.users.map(u => {
        return (
            <li className={s.user} key={u.id}>
                <div className={s.user_left}>
                    <div className={s.user_left__img}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name}/>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    <div className={s.user_left__name}>
                        <h4>{u.name}</h4>
                        <p>{u.status}</p>
                    </div>
                </div>
                <div className={s.user_right}>
                    <div className={s.user_right__country}>
                        <span>{"u.location.city"}</span><span>{"u.location.country"}</span>
                    </div>
                </div>
            </li>
        )
    });

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
};

export default Users;