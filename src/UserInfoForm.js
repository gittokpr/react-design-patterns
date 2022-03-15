import { withEditableResource } from "./withEditableResource";
import { withEditableUser } from "./withEditableUser"

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
        <>
            <label>
                Name:
                <input type="text"
                    name="name"
                    value={name}
                    onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>
                Age:
                <input type="number"
                    name="age"
                    value={age}
                    onChange={e => onChangeUser({ age: Number(e.target.value) })} />
            </label>
            <label>
                Hair Color:
                <input type="text"
                    name="hairColor"
                    value={hairColor}
                    onChange={e => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : null;
}, '/users/345', 'user');