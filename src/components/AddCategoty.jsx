import { useState } from 'react'

export const AddCategoty = ({ onNewCatregory }) => {

    const [inputValue, setInputValue] = useState('One Punch')


    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCatregory(inputValue.trim())
        //setcategories(categories => [inputValue, ...categories])
        
    }

    return (

        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="Text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
