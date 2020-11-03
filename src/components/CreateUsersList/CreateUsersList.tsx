import React, {useState, useEffect} from 'react'
import { ApiService } from '../../services/ApiService';

export const CreateUsersList = () => {

    const [usersList, setUsersList] = useState<JSX.Element[]>();

    useEffect(() => {
        ApiService.getUsersList().then((response) => {
            setUsersList(response.map((user) => <option value={user}>{user}</option>));
        })}
    , []);

    return (
        <>
            {usersList}
        </>
    )
}
