const API_KEY = "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"

const submitIcon = document.querySelector('#button-addon2')

const inputElement =  document.querySelector('.form-control')

const getImages = async () => {
    
    const options = {
        method : "POST",
        headers : {
            "Authorization" : `Bearer ${API_KEY}`,
            'Content-Type' : "application/json"
        },
        body : JSON.stringify({
            "prompt" : "inputElement.value",
            "n" : 1,
            "size" : "1024x1024"
        })
    }

    
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options)

        const data = await response.json()

        console.log(data)

    } catch (error) {
        console.log(error)
    }
}



submitIcon.addEventListener('click', getImages())