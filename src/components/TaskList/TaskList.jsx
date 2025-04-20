import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id="tasklist" className="w-full py-8 mt-16 flex items-center justify-start gap-6 overflow-x-auto">
            <div className="w-full flex gap-6 overflow-x-auto scrollbar-hide">
                {data.tasks.map((elem, idx) => {
                    let taskComponent;

                    if (elem.active) {
                        taskComponent = <AcceptTask data={elem} />
                    }
                    else if (elem.newTask) {
                        taskComponent = <NewTask data={elem} />
                    } else if (elem.completed) {
                        taskComponent = <CompleteTask data={elem} />
                    }
                    else if (elem.failed) {
                        taskComponent = <FailedTask data={elem} />
                    }

                    return (
                        <div
                            key={idx}
                            className={`flex-shrink-0 bg-white p-4 rounded-lg shadow-md ${idx === 3 ? 'ml-auto' : ''}`}
                        >
                            {taskComponent}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskList
