import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const Recipe = () => {
    const params = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch(
            `http://127.0.0.1:8000/api/recipes` +
            `?slug=${params['category_slug']}&id=${params['recipe_id']}`,
        )
            .then(res => res.json())
            .then(data => setRecipe(data));
    }, []);
    return (
        <div>
            {recipe.map((recipe, index) => (
                <div key={index}>
                    <p>{recipe['recipe_name']}</p>
                    <p style={{ whiteSpace: 'pre-line' }}>{recipe['ingredients']}</p>
                    <p style={{ whiteSpace: 'pre-line' }}>{recipe['instructions']}</p>
                </div>
            ))}
        </div>
    )
}

export {Recipe}