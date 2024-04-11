import { UserContext } from '@/store/context'
import { useContext } from 'react'

const FinanceSheet = () => {

    const user = useContext(UserContext)
    console.log(user)

    const permission = user.userState.permissions.find(item => item === "finance")
    console.log(permission)

    if (permission === "finance") {
        return <h1>finance sheet</h1>
    }
    return (
        <div>
            <h1>no permission</h1>
        </div>
    )
}

export default FinanceSheet
