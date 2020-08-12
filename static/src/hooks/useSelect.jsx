import React from 'react';

const { useState } = React;

function useSelect(){
    const [selected, setSelected] = useState([])
    return {
        mode: "multiple",
        value: selected,
        onChange: (value) => {
            setSelected(value)
        },
        onSearch: (value) => {
            // setSelected(value)
        }
    }
}

export default useSelect;