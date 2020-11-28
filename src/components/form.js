import React,{useState} from "react"
import {testInfo} from "../services/test"

const Form = props => {
    const [question,setQuestion] = useState('')
    const [answer,setAnswer] = useState('')
    const [res,setRes] = useState(null)

    const clear = () => {
        setQuestion('')
        setAnswer('')
    }

    const handler = (e) => {
        e.preventDefault()

        const result = testInfo({
            question,
            answer
        })
        
        setRes(result)

        clear()
    }

    return (
        <form onSubmit={handler}>
            <input 
                type="text" 
                name="question" 
                placeholder="Введите вопрос"
                value={question}
                onChange={(e)=>setQuestion(e.target.value)}
            />
            <input 
                type="text" 
                name="answer" 
                placeholder="Введите ответ"
                value={answer}
                onChange={(e)=>setAnswer(e.target.value)}
            />
            {res && <p>{res}</p>}
            <button>Добавить вопрос</button>
        </form>
    )
}

export default Form