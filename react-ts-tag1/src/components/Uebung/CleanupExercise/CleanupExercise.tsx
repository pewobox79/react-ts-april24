import { useEffect, useState } from 'react'
import UserButton from './UserButton'

const CleanupExercise = () => {


    const [user, setUser] = useState()
    const [userId, setUserId] = useState("1")
    console.log("userid", userId)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal: signal})
            .then(res => res.json())
            .then(data => {
                setUser(data)

            })

            //cleanup fetch controller 
            return ()=> controller.abort() 
    }, [userId])


    return (
        <div>

            <div><h1>{user?.name} {userId}</h1>
                <p>{user?.email}</p></div>

            <div>
                <UserButton id="2" name="user" setUserId={setUserId} />
                <UserButton id="4" name="user" setUserId={setUserId} />
                <UserButton id="7" name="user" setUserId={setUserId} />
                <UserButton id="3" name="user" setUserId={setUserId} />
            </div>

        </div>
    )
}

export default CleanupExercise
