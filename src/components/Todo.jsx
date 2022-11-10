const Todo = ({todo, handleSetComplete, handleDelete}) =>{
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            <div className="flex items-center">
                {
                    todo.completed ? (
                        <div onClick={() => handleSetComplete(todo.id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4" src="/check-icon.svg" alt="Check icon" />
                        </div>
                    ) : (
                        <span onClick={() => handleSetComplete(todo.id)} className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }
                <p className={"p-3 ml-7" + (todo.completed && "line-through")}>
                    {todo.title}
                </p>
            </div>
            <img onClick={() => handleDelete(todo.id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="close icon" />
        </div>
    )
}

export {Todo}