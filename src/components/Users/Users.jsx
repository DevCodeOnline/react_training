import React from "react";
import s from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photoUrl: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png',
                fullName: 'Gleb Knyzev',
                status: 'I im a cool!',
                location: {city: 'Donetsk', country: 'Ukraine'}
            },
            {
                id: 2,
                followed: true,
                photoUrl: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png',
                fullName: 'Ivan Ivanov',
                status: 'I im a cool too!',
                location: {city: 'Moscow', country: 'Russian'}
            },
            {
                id: 3,
                followed: false,
                photoUrl: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png',
                fullName: 'Petr Petrov',
                status: 'I im a cool too!',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ]);
    }

    let list = props.users.map(u => {
        return (
            <li className={s.user} key={u.id}>
                <div className={s.user_left}>
                    <div className={s.user_left__img}>
                        <img src={u.photoUrl} alt="User"/>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    <div className={s.user_left__name}>
                        <h4>{u.fullName}</h4>
                        <p>{u.status}</p>
                    </div>
                </div>
                <div className={s.user_right}>
                    <div className={s.user_right__country}>
                        <span>{u.location.city}</span><span>{u.location.country}</span>
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