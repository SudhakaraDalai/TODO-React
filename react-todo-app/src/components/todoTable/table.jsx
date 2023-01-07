import "./table.css";



const TodoTable =()=>{
    const handleLogout=()=>{
        localStorage.removeItem("token");
        document.location.reload()
    }
    const username = localStorage.getItem("username").toLocalUpperCase()
    return(
        <div className="todo-page-container">
            <header className="header">
                <h1>{username}</h1>
            </header>
            <section className="bottom-container">
                <div className="sidenav">
                    <div>
                        <p style={{color:"red",marginBottom:"15px"}}>Todo List</p>
                        <h3>History</h3>
                    </div>
                    <h3 style={{cursor:"pointer"}} onClick={handleLogout}>Logout</h3>
                </div>
                <div className="todosection">
                    <div className="Add-todo-btn">
                        <div>
                            <button> Add new activity</button>
                        </div>
                    </div>
                    <div className= "todo-table">
                        <table style={{border:"1px solid black"}}>
                            <thead>
                                <th style={{border:"1px solid black"}}>Activity</th>
                                <th style={{border:"1px solid black"}}>Status</th>
                                <th style={{border:"1px solid black"}}>TimeTaken <br /> (hour:min:sec)</th>
                                <th style={{border:"1px solid black"}}>Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                <td style={{border:"1px solid black"}}>Running</td>
                                <td style={{border:"1px solid black"}}>Completed</td>
                                <td style={{border:"1px solid black"}}>00:05:00</td>
                                <td style={{border:"1px solid black"}}>Start</td>
                                </tr>
                                <tr>
                                <td style={{border:"1px solid black"}}>Study</td>
                                <td style={{border:"1px solid black"}}>Pending</td>
                                <td style={{border:"1px solid black"}}></td>
                                <td style={{border:"1px solid black"}}>Resume</td>
                                </tr>
                                <tr>
                                <td style={{border:"1px solid black"}}>Cooking</td>
                                <td style={{border:"1px solid black"}}>Pending</td>
                                <td style={{border:"1px solid black"}}></td>
                                <td style={{border:"1px solid black"}}>Resume</td>
                                </tr>
                                <tr>
                                <td style={{border:"1px solid black"}}>Sleeping</td>
                                <td style={{border:"1px solid black"}}>Pending</td>
                                <td style={{border:"1px solid black"}}></td>
                                <td style={{border:"1px solid black"}}>Pasue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TodoTable