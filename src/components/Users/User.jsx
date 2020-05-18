import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/User.png';
import {NavLink} from 'react-router-dom';

let User = ({user, followingInProgress, btnUnfollow, btnFollow}) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed

                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          btnUnfollow(user.id)
                                      }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          btnFollow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>

            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>

        </div>
    );
};

export default User;