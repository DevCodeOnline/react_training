import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://i.ya-webdesign.com/images/user-avatar-png-7.png" />
			<p>{props.message}</p>
			<span className={s.count}>{props.count}</span>
		</div>
	)
}

export default Post;