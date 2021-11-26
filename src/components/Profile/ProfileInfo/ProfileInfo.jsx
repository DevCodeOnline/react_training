import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div className={s.banner}>
            <img src="https://im0-tub-ua.yandex.net/i?id=cbbbc4e8caaee7159b68e254333aa2c0&n=13"/>
        </div>
        <div className={s.profile}>
            <div className={s.profile_img}>
                <img src="https://ih1.redbubble.net/image.481741969.3656/flat,800x800,075,f.u1.jpg"/>
            </div>
            <div className={s.profile_info}>
                <div className={s.profile_name}>Gleb Knyzev</div>
                <div className={s.profile_attr}>
                    <ul>
                        <li>
                            <span>Date of Birth: </span>
                            <span>1 junuaty</span>
                        </li>
                        <li>
                            <span>City: </span>
                            <span>Donetsk</span>
                        </li>
                        <li>
                            <span>Education: </span>
                            <span>BSU'11</span>
                        </li>
                        <li>
                            <span>Web-site: </span>
                            <span>art-duncan.ru</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
};

export default ProfileInfo;