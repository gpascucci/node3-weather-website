const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//add event listener
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Searching...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then(({ error, forecast, location }) => {
            if (error) {
                return messageOne.textContent =error
            }
    
            messageOne.textContent = location
            messageTwo.textContent = forecast
    
        })
    })

    console.log(location)
})