import React,{useState} from "react"

const Form = props => {
    const [question,setQuestion] = useState('')
    const [answer,setAnswer] = useState('')
    const clear = () => {
        setQuestion('')
        setAnswer('')
    }
    const handler = (e) => {
        e.preventDefault()
        clear()
    }
    console.log(question,answer)
    return (
        <form action="/form_handler" method="POST" onSubmit={handler}>
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
            <button>Добавить вопрос</button>
        </form>
    )
}

export default Form