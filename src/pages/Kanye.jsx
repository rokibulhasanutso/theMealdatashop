import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Kanye = () => {

    const apiUrl = 'https://api.kanye.rest';

    const navigate = useNavigate()
    const [ data, setData ] = useState()

    useEffect(() => {

        clickRefresh()

    }, [])

    const clickRefresh = () => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(resData => setData(resData))
    }

    console.log(data)

    return (
        <div className="container mx-auto max-w-xl mt-20">
            <h1 className="text-4xl font-semibold text-center">Kanye.rest</h1>
            <div className="mt-10">
                <div className="flex justify-between my-4">
                    <p className="text-blue-500">{apiUrl}</p>
                    <button onClick={clickRefresh} className="text-blue-500 font-bold">refresh</button>
                </div>
                <div className=" p-5 bg-gray-200 rounded-md font-semibold">
                    <p>
                        {`" ${data?.quote} "`}
                    </p>
                    <span className="block text-end">- Kanye West</span>
                </div>
            </div>

            <div className="text-center mt-10">
                <button 
                    onClick={() => navigate('/themealdb')}
                    className="text-blue-500"
                >
                    Go to the meal bd
                </button>
            </div>
            
        </div>
    );
};

export default Kanye;