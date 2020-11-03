import React, {useState, useEffect} from 'react'
import { ApiService } from '../../services/ApiService';

export const CreateUsersList = () => {

    const [options, setOptions] = useState<JSX.Element[]>();

    useEffect(() => {
        ApiService.getUsersList().then((response) => {
            const optionList = response.map((opt) => <option value={opt}>{opt}</option>)
            setOptions(optionList);
        })}
    , []);

    return (
        <>
            {options}
        </>
    )
}
