import { useEffect, useState } from "react"

const UseEffectExercise = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {

        const interval = setTimeout(() => {
            setNumber(prev => prev + 1)
        }, 1000)

        //cleanup function um parallel ausführungen des intervalls zu vermeiden
        return () => clearInterval(interval)


    }, [number])

    return (
        <div>
            <h1>users</h1>
            <h3>{number}afasdfdfasdfsd</h3>
        </div>
    )
}

export default UseEffectExercise
