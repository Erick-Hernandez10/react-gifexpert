import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCatregory }) => {

    const [inputValue, setInputValue] = useState('')


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


AddCategory.propTypes={
    onNewCatregory: PropTypes.func.isRequired,
}