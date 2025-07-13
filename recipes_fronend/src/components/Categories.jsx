import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const Categories = () => {
    const [jsonDict, setJsonDict] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
            .then(res => res.json())
            .then(data => setJsonDict(data));
    }, []);
    return (
        <div className="categories">
            Категории
            {jsonDict.map((category, index) => (
                <p key={index}>
                    <Link to={`/categories/${category['slug']}`}>
                        {category['category_name']}
                    </Link>
                </p>
            ))}
        </div>
    )
}

export {Categories}