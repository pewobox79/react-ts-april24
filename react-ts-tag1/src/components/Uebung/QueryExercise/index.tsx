import { useQuery } from "@tanstack/react-query"

const QueryExercise = () => {


    const { data, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            return data

        }

    })

    console.log(isLoading, data)

    return (
        <div>
            <h1>query exercise</h1>
            {isLoading ? "...isloading.." : data?.map((item) => {
                return <li>{item.name}</li>
            })}

        </div>
    )
}

export default QueryExercise
