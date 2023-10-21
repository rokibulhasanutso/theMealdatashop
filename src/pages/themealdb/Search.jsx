import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Search = () => {
    const [apiData, setApiData] = useState()
    const [params] = useSearchParams()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.get('query')}`)
        .then(res => res.json())
        .then(data => setApiData(data))

    }, [params])

    console.log(apiData)

    return (
        <div>
            <div className="flex flex-wrap justify-between">
                {
                    apiData?.meals !== null
                    ? apiData?.meals?.map((mealItem, index) => {
                        return (
                            <div key={index} className="basis-96">
                                <div>
                                    <img src={mealItem.strMealThumb} alt="MEAL Image" />
                                    <p>{mealItem.strMeal}</p>
                                </div>
                            </div>
                        )
                    })

                    : <div>No item available</div>
                }
            </div>
        </div>
    );
};

export default Search;