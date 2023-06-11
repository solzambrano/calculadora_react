import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import words from 'lodash.words'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    // Array Destructuring
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // 2da posición: función que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("")
    const items=words(stack,/[^-^+^*^/]+/g)
    // Lo que ejecuta la función
    const value= items.length>0?items[items.length-1]:'0'
    console.log("Renderización de App",items)
    return (
    <main className='react-calculator'>
        <Result value={value} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(stack + number)
        }} />
        <Functions 
            onContentClear={() =>{ 
            setStack('')
                console.log("Content Clear")
                }}
            onDelete={() => {
                if(stack.length>0){
                const newStack=stack.substring(0,stack.length-1)
                setStack(newStack)
                }}
                }
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
            } }
            onClickEqual={equal => {
            setStack(eval(stack).toString())
                console.log("Equal:", equal)
            }
            }
        />
    </main>)
}

export default App

//https://github.com/correooke/udemy_react-calc-app
