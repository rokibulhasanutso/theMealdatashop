import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const Searchbar = () => {
    const [ inputValue, setInputValue ] = useState()
    const [ params, setparams ] = useSearchParams()

    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/themealdb/search')
        setparams({query : inputValue})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className='border border-black px-2.5 py-1.5 w-80' 
                    type="text"
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                />
                <input 
                    type="submit" 
                    value='Search'
                    className="px-2.5 py-1.5 bg-gray-300"
                />
            </form>
        </div>
    );
};

export default Searchbar;