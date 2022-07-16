import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
  // debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://cspromogame.ru//storage/upload_images/avatars/856.jpg',
        followed: false,
        fullName: 'Sergey',
        status: 'Who let the dog out?',
        location: {
          city: 'Minsk',
          country: 'Belarus',
        },
      },
      {
        id: 2,
        photoUrl:
          'https://cspromogame.ru//storage/upload_images/avatars/858.jpg',
        followed: true,
        fullName: 'Drew',
        status: 'Helloo!!!',
        location: {
          city: 'Kiev',
          country: 'Ukraine',
        },
      },
      {
        id: 3,
        photoUrl:
          'https://cspromogame.ru//storage/upload_images/avatars/4169.jpg',
        followed: false,
        fullName: 'Alex',
        status: 'How are you?',
        location: {
          city: 'Moscow',
          country: 'Russia',
        },
      },
    ]);
  }
  //   debugger;
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img className={s.userPhoto} src={u.photoUrl} alt='' />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
