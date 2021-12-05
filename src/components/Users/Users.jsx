import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/boy.png";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        if (i <= 4) {
            pages.push(i)
        } else if (i > 4 && i === pageCount) {
            pages.push(i)
        }

    }

    return <div>
        <div>
            <nav aria-label="pagination">
                <ul className={s.pagination}>
                    {pages.map(p => {
                        return <li className={s.page_item}><span className={props.currentPage === p ? s.active : ''}
                                                                 onClick={(e) => {props.onPageChange(p)}}
                        >{p}</span></li>
                    })
                    }
                </ul>
            </nav>
        </div>
        <ul>
            {
                props.users.map(u => <li className={s.user} key={u.id}>
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

            }
        </ul>
        {/*<button onClick={this.getUsers} className={s.btn_show}>Show users</button>*/}
    </div>
}

export default Users;