import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContxt'

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo= (todo)=> {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]);

  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.forEach((prevtodo)=>(prevtodo.id === id ?todo:prevtodo)));
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevtodo)=>prevtodo.id !== id));
  }

  // wrote different code from tutorial 
  const toggleTodo = (id) =>{
    setTodos((prev)=> prev.forEach((prevtodo)=>{
      if(prevtodo.id === id){
        return {...prevtodo,checked:!prevtodo.checked}
      }
      else{
        return prevtodo;
      }
    }))
  }

  // using local storage
  useEffect(()=>{
    const tds =JSON.parse(localStorage.getItem('tds'));

    if(tds){
      setTodos(tds);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tds',JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
