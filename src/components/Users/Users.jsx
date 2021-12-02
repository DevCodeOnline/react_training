import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/boy.png";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.users.map(u => <li className={s.user} key={u.id}>
                                <div className={s.user_left}>
                                    <div className={s.user_left__img}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name}/>
                                        {u.followed ?
                                            <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                            <button onClick={() => this.props.follow(u.id)}>Follow</button>
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

                    }
                </ul>
                {/*<button onClick={this.getUsers} className={s.btn_show}>Show users</button>*/}
            </div>
        )
    }
}

export default Users;