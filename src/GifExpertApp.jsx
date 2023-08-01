import { useState } from 'react';
import { AddCategoty,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState([ 'Dragon ball'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategoty
                onNewCatregory={event => onAddCategory(event)}
            />
            
            {categories.map(category =>
                (
                    <GifGrid 
                    key={category} 
                    category={category}/>
                )
            )}
        </>

    )
}
