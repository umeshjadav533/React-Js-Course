import useFetch from "./hooks/useFetch"

const FetchData = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Error Occured!</h3>

  return (
    <div>
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchData
