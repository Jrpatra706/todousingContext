import { createContext,useContext } from "react";
export const TodoContxt = createContext({
    todos:[{
        id:1,
        todo:'message',
        checked:false,
    }],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
});

export const TodoProvider = TodoContxt.Provider;

export default function useTodo(){
    return useContext(TodoContxt);
}