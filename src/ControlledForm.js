import { useEffect, useState } from "react"

const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError("Name must have 2 or more characters.")
        } else {
            setNameInputError('')
        }
    }, [name]);

    return (
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                name="age"
                placeholder="age"
                value={age}
                onChange={e => setAge(Number(e.target.value))} />
            <input
                type="text"
                name="hairColor"
                placeholder="hair color"
                value={hairColor}
                onChange={e => setHairColor(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}

export default ControlledForm;