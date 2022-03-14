export const SmallPersonListItem = ({ person }) => {
    const { name, age } = person;
    return (
        <p>name: {name}, age: {age} years</p>
    )
}