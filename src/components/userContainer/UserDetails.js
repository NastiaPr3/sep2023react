import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {

    // const users = userDetails;
    // console.log(users);
    //
    // let divka = document.createElement('div');
    // divka.className = 'asd';
    //
    // for (const user in users) {
    //     let divUser = document.createElement('div');
    //     if (typeof user !== "object") {
    //         divUser.innerText = `${user} : ${users[user]}`;
    //     } else {
    //         divUser.innerText = `${user}:`
    //     }
    //     divka.append(divUser);
    //
    // }


    // const {id, name, username, email,
    //     address: {
    //     street,
    //         suite,
    //         city,
    //         zipcode,
    //         geo: {
    //         lat,
    //             lng
    //         }
    //     },
    //     phone, website, company: {
    //                     catchPhrase,
    //         bs
    //     }
    //
    // } = userDetails;


    const {id, name, username, email} = userDetails;

    const navigate = useNavigate();

    return (
        <div>

            {/*{*/}
            {/*    document.getElementsByClassName('divka')[0]*/}
            {/*}*/}

            {/*{*/}
            {/*    document.body.append(divka)*/}
            {/*}*/}

            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>username: {username}</h2>
            <h2>email: {email}</h2>
            <button onClick={() => navigate('posts', {state: {id}})}>Post of current user</button>

        </div>
    );
};

export {UserDetails};