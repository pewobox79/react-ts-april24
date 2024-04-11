import { useFetch } from "@/hooks/useFetch"

import { Link } from "react-router-dom"

const Users = () => {

    const URL = "https://jsonplaceholder.typie.com/users"

    const { data, isLoading, isError } = useFetch(URL);

    /* const [users, setUsers] = useState<[]>([])

    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setUsers(data) //re-render angestossen
                //console.log("user in effect", users) //noch keine aktuellen werte
            })

    }, []) */


    const UserList = data.map((item: { name: string, id: number }) => {
        return <Link to={`/users/${item.id}`} key={item.id} ><div>
            {item.name}
        </div></Link>
    })
    return (
        <div>
            <h1>users</h1>
            {isLoading ? "is Loading" : UserList}
            {isError && <p>error happend</p>}
        </div>
    )
}

export default Users
