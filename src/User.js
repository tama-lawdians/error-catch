import React from 'react';

function User({user}){
    // if(!user){
    //     return null; // user값 없을 때 null 렌더링 > 아무것도 안나타나는 화면 : null checking
    // }

    return(
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username:</b> {user.username}
            </div>
        </div>
    );

//     if(!users) return null; // users값 없을 때 null

//     return(
//         <ul>
//             {users.map(user => ( //users가 undefined면 에러
//                 <li key={user.id} onClick={() => onToggle(user.id)}>
//                     {user.username}</li>
//             ))}
//         </ul>
//     );
// }

// Users.defaultProps = {
//     onToggle: () => {
//         console.warn('onToggle is missing!');
//     }
};

export default User;