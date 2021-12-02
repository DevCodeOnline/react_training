import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/boy.png";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    };

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            if (i <= 4) {
                pages.push(i)
            } else if (i > 4 && i === pageCount) {
                pages.push(i)
            }

        }
        return (
            <div>
                <div>
                    <nav aria-label="pagination">
                        <ul className={s.pagination}>
                            {pages.map(p => {
                                    return <li className={s.page_item}><span className={this.props.currentPage === p ? s.active : ''}
                                    onClick={(e) => {this.onPageChange(p)}}
                                    >{p}</span></li>
                                })
                            }
                        </ul>
                    </nav>
                </div>
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