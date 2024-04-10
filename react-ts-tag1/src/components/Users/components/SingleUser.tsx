import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type UserType = {
    name: string,
    email: string
}
const SingleUser = () => {

    const { id } = useParams();
    const [selectedUser, setSelectedUser] = useState<UserType>()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(data => {
                    setSelectedUser(data)
                    setIsLoading(false)
                })

        }, 2000)

    }, [])


    if (isLoading) {
        return <div>...is Loading</div>
    }
    return (
        <div>
            <h3>{selectedUser?.name}</h3>
            <p>{selectedUser?.email}</p>
        </div>
    )
}

export default SingleUser
