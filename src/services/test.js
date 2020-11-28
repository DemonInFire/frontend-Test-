import axios from 'axios'

const validateData = (data) => {
    if(data.answer && data.question){
        return true
    } else {
        return false
    }
}

export const testInfo = (data) => {
    const info = validateData(data)

    if (info) {
        let reqRes

        axios.post('http://80381b9e5d68.ngrok.io/api/test/save', data) // asynh
            .then(res => {
                reqRes = res.data
            })

            .catch((err) => {
                reqRes = err
            })

        return reqRes
    } else {
        return 'Введена не вся информация'
    }
}

