import { useState } from 'react'
import Card from '../../UI/Card/Card'
import './Result.module.css'

const Result = ({ data }) => {

    //toggel button handler 
    const [tempType, setTempType] = useState(true);
    const onClickHandler = () => {
        console.log('clicked')
        setTempType(!tempType)
    }

    let temp = {}
    if (tempType) {
        temp["value"] = data.current.temp_c;
        temp["type"] = "c"


    } else {
        temp["value"] = data.current.temp_f;
        temp["type"] = "f"
    }


    return (
        <div className='p-5'>
            <h1 className='text-white'>{data.location.name},{data.location.country}</h1>
            <div className='data d-flex justify-content-around align-items-center w-50 m-auto text-center'>
                <img src={data.current.condition.icon} className="w-25" />
                <span className='text-primary fs-1'>{temp.value} <sup>o</sup> {temp.type}</span>
                <button onClick={onClickHandler} className='bg-transparent border-0'> <i className="fa-solid fa-repeat text-white"></i></button>

            </div>
            <Card className='date-container bg-white p-3 w-50 m-auto border-radius-5'>
                <p className='fs-4 m-0 fw-bold'>{data.location.localtime}</p>
            </Card>

        </div>

    )
}
export default Result;