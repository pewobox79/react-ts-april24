type UserButtonType = { 
    id: string, 
    setUserId: (id: string) => void, 
    name: string }

const UserButton = ({ id, setUserId, name }:UserButtonType) => {

    function handleClick() {
        setUserId(id)
    }
    return (
        <button onClick={handleClick}>
            {name} {id}
        </button>
    )
}

export default UserButton
