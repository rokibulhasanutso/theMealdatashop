import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Meal = () => {
    const [ apiData, setApiData ] = useState()
    const {cate_name} = useParams()


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cate_name}`)
        .then(res => res.json())
        .then(data => setApiData(data))

    }, [cate_name])



    console.log(cate_name)
    console.log(apiData)

    return (
        <div>
            <div className="flex flex-wrap justify-between">
                {
                    apiData?.meals?.map((mealItem, index) => {
                        return (
                            <div key={index} className="basis-96">
                                <div>
                                    <img src={mealItem.strMealThumb} alt="MEAL Image" />
                                    <p>{mealItem.strMeal}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Meal;