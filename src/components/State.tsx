import React, { useState } from "react";

function State() {

    const [counter, setCounter] = useState(0)
    const [fruit, setFruit] = useState('Fresa')
    //Cuando hay un cambio en el estado se vuelve a disparar el funtional component
    const handleAdd = () => {
        // console.log(e)
        setCounter(counter + 1);
        // setCounter((c) => c + 1)
        setFruit('Piña'); //se cambia el estado de fruit a Piña
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
        setFruit('Naranja'); //se cambia el estado de fruit a Naranja
    }

    const handleReset = () => {
        setCounter(0);
        setFruit('Fresa'); //regresa a su estado original
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <h1>Frutas</h1>
            <h2>{fruit}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default State;