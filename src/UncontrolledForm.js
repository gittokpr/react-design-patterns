import { createRef } from "react"

const UncontrolledForm = () => {
    const nameInput = createRef();
    const ageInput = createRef();
    const hairColorInput = createRef();

    const handleSubmit = e => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" ref={nameInput} />
            <input type="number" name="age" placeholder="age" ref={ageInput} />
            <input type="text" name="hairColor" placeholder="hair color" ref={hairColorInput} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default UncontrolledForm;