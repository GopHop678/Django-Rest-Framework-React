import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Categories } from './components/Categories';
import { CategoryRecipes } from './components/CategoryRecipes';
import { Recipe } from './components/Recipe';


function App() {
    return (
        <>
            <header className='header-wrapper'>
                <Link to="/categories">На главную</Link>
            </header>
            <div className='content-wrapper'>
                <Routes>
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/categories/:category_slug' element={<CategoryRecipes />} />
                    <Route path='/categories/:category_slug/:recipe_id' element={<Recipe />} />
                    <Route path='*' element={<Categories />} />
                </Routes>
            </div>
        </>
    )
}

export default App
