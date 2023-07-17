fetch('https://api.nasa.gov/planetary/apod?api_key=kJO7qaeWbUAste9Al1ZOj5Dmr2E82rAe80l9Sbce')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        console.log(data.hdurl)

        document.getElementById('APOD').src = data.hdurl
        document.getElementById('Explanation').innerText = data.explanation
        document.getElementById('Title').innerText = data.title
    })
    .catch(error => console.log(error))