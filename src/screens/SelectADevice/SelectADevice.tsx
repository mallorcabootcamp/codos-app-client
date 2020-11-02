import React, {useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import { ApiService } from '../../services/ApiService'


export const SelectADevice = (props: any) => {
    const [options, setOptions] = useState<JSX.Element[]>();

    useEffect(() => {
        ApiService.getUsersList().then((response) => {
            const optionList = response.map((opt) => <option value={opt}>{opt}</option>)
            setOptions(optionList);
        })}
    , []);
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <h2>Seleccione un dispositivo</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <select className="prediction-input custom-select custom-select-lg">
                        {options}
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <Link to='/' ><button className='btn btn-secondary px-3' onClick={props.onClick}>Inicio</button></Link>
                </div>
            </div>
        </div>
    )
}


