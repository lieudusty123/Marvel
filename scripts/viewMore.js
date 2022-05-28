const plotDiv = document.querySelector('#plotDiv')
const details = document.querySelector('.details')
const trailerSource = document.querySelector('#posterSource')
const sendGetRequest = async () => {
    try {
        // fetching data
        let res = await axios.get(`http://www.omdbapi.com/?i=${localStorage.getItem('movie')}&apikey=${localStorage.getItem('APIKey')}`)
        let data = await res.data
        console.log(data)

        // styling
        plotDiv.innerHTML = `${data.Plot}`

        details.innerHTML =
            `<b>Actors:</b> ${data.Actors} <br>
            <b>Release Date:</b> ${data.Released} <br>
            <b>BoxOffice:</b> ${data.BoxOffice} <b>IMDB Rating:</b> ${data.imdbRating}`

        trailerSource.src = `${data.Poster}`
    }
    catch (e) {
        console.log(e, "<--- Yikes")
    }

}

sendGetRequest()

