import { useState } from "react"

export function CreateTodo() {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input type="text" placeholder="title" onChange={(e) => {
                setTitle(e.target.value);
            }}/><br /><br />
            <input type="text" placeholder="description" onChange={(e) => {
                setDescription(e.target.value);
            }}/> <br /><br />

            <button onClick={() => {
                fetch("http://localhost:8080/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(async (res) =>{
                    const json = await res.json();
                    alert("to do is created");
                })
            }}>Add new todo</button>
        </div>
    )
}