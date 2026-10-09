import { useState } from 'react';
const PageBoard = () => {
    
    const [tasks, setTasks] = useState([]);
    const addTask = () => {  
        let uuid = self.crypto.randomUUID();
        const newTask = {
        "id": uuid,
        "title": inputField,
        "checked": false,
        "value": 0}
        setTasks(t => [...t, newTask])

    }
    const taskCheck = (id) => {
        setTasks(
            (t)=>t.map(
                e=>(e.id === id ? {...e,"checked" : !e.checked} : e))
        )
    }
    const [inputField, setInputField] = useState("");
    

    return (
        <section className="page active" id="page-board">
            <div className="page-header">
                <h1 className="page-title">Board</h1>
                <p className="page-subtitle">Sprint 24, growth pod</p>
            </div>

            <div
                className="mount-wrap"
                data-hook="3.1 useState + useEffect (fetch on mount)">
                <div className="mount-point stats-row" id="mount-stats">
                    <div className="stat-card">
                        <div className="stat-value">{tasks.length}</div>
                        <div className="stat-label">Open</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{""}</div>
                        <div className="stat-label">In progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{tasks.filter(e=>e.checked).length}</div>
                        <div className="stat-label">Done this sprint</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{""}</div>
                        <div className="stat-label">Velocity</div>
                    </div>
                </div>
            </div>

            <div className="board-toolbar">
                <div className="mount-wrap" data-hook="1.2 useState (toggle)">
                    <div
                        className="mount-point switch-row"
                        id="mount-show-completed">
                        <span className="switch"></span>
                        <span>Show completed tasks</span>
                    </div>
                </div>
            </div>

            <div
                className="mount-wrap"
                data-hook="1.6 array · 1.1 counter · 1.5 functional update">
                <div className="mount-point" id="mount-tasklist">
                    <div className="add-task-row">
                        <input
                            className="input grow"
                            placeholder="Add a task and press Enter..."
                            onChange={e => setInputField(e.target.value)}
                        />
                        <button className="btn" onClick={addTask}>Add</button>
                    </div>
                    <div className="task-list">
                    {tasks.map((task)=>(
                        <div className="task-row" id={`task-id_${task.id}`}>
                            <button className={"task-check " + (task.checked ? "checked" : "")}
                            onClick={()=>taskCheck(task.id)}
                            ></button>
                            <span className="task-title">
                                {task.title}
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">{task.value}</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+{task.value}</button>
                            <button className="icon-danger">✕</button>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBoard
