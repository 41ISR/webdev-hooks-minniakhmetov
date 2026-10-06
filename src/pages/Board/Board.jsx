import { useState } from 'react';
const PageBoard = () => {
    const [openCount, setOpenCount] = useState("24");
    const [inProgress, setInProgress] = useState("9");
    const [doneSprint, setDoneSprint] = useState("61");
    const [velocity, setVelocity] = useState("7.4");
    const [inputField, setInputField] = useState("");
    const [tasks, setTasks] = useState([]);
    const addTask = () => {  
        const newTask = {
        "title": inputField,
        "checked": false,
        "value": 0}
        setTasks(o => [...o, newTask])
    }
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
                        <div className="stat-value">{openCount}</div>
                        <div className="stat-label">Open</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{inProgress}</div>
                        <div className="stat-label">In progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{doneSprint}</div>
                        <div className="stat-label">Done this sprint</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{velocity}</div>
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
                        <div className="task-row">
                            <button className={"task-check " + (task.checked ? "checked" : "")}></button>
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
