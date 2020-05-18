import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (

        <div className={style.item}>
            <img src='https://404store.com/2019/09/15/wildlifeclup-20190915-0003.jpg' />
            
            { props.message }

            <div>
                <span>Like { props.likeCount }</span>
            </div>
        </div>
    );
}

export default Post;