import React, { useState } from "react";

function Props(props: any) {

    const [name, setName] = useState(props)
    const newName = 'itzra';

    function handleNewName(newName: string) {
        setName(newName);
    }

    return (
        <>
            <h2>Cambio de Nombre</h2>
            <p>{name}</p>
            <button onClick={() => handleNewName(newName)}>Cambiar</button>
        </>
    );
}

export default Props;