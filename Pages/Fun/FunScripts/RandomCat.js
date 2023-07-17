fetch('https://api.thecatapi.com/v1/images/search?api_key=live_FcyR7QumukYi0sCzv1qdRMsIcOMZK9GXnqz2PnCxppHUDeQ5LAPkDQPCBtBIAHRS')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        console.log(data[0].url)

        document.getElementById('cat').src = data[0].url
    })
    .catch(error => console.log(error))