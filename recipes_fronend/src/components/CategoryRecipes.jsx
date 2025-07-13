import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";


const CategoryRecipes = () => {
    const params = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/recipes?slug=${params['category_slug']}`)
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);
    return (
        <div>
            {recipes.map((recipe, index) => (
                <p key={index}>
                    <Link to={`/categories/${params['category_slug']}/${recipe['id']}`}>
                        {recipe['recipe_name']}
                    </Link>
                </p>
            ))}
        </div>
    )
}

export {CategoryRecipes}