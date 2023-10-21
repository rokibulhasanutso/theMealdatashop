import { useEffect, useState } from 'react';
import Searchbar from './../../component/Searchbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const LatestAPI = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    const [ data, setData ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(LatestAPI)
            .then(res => res.json())
            .then(resData => setData(resData?.categories?.slice(0, 8)))
    }, [])
    

    // data?.map(data => console.log(data))

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mt-6'>
                <Searchbar/>
            </div>
            <div className='my-10'>
                <section>
                    <h1 className='text-center'>Latest Meals</h1>
                    <div className='flex flex-wrap justify-between'>
                        {
                            !data
                            ? <p>Loading...</p>
                            : data.map(dataObj => {
                                return (
                                    <div key={dataObj.idCategory} onClick={() => navigate(`meal/${dataObj.strCategory}`)}>
                                        <img src={dataObj.strCategoryThumb}/>
                                        <p className='text-center'>{dataObj.strCategory}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;