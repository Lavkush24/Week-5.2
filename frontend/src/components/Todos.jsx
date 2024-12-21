// const todos = [{
//     title: "got to gym",
//     description: "you need go to gym"
// },{
//      title: "Do DSA",
//     description: "Do 3 hour DSA daily"
// }]

export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            return (
                <div>
                    <h2>{todo.title} </h2>
                    <h3>{todo.description}</h3>
                    <button onClick={() => {
                        fetch("http://localhost:8080/completed",{
                            method: "PUT",
                            body: JSON.stringify({
                                id: todo._id 
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(async (res) => {
                            const json = await res.json();
                        })
                    }}>{todo.completed == true ? "Completed": "Mark As completed"}</button>
                </div>
            )  
        })}
    </div>
}