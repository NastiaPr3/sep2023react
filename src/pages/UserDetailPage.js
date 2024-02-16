import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services";
import {UserDetails} from "../components";

const UserDetailPage = () => {

    const {id} = useParams();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getById(id).then(({data}) => setUserDetails(data));
    }, [id]);


    return (
        <div>
            {
                userDetails && <UserDetails userDetails={userDetails}/>
            }

            <Outlet/>
        </div>
    );
};

export {UserDetailPage};