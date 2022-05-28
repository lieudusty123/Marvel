// k_l3d74wg3
// k_6lqq4u53

localStorage.clear();

// var browser = browser || chrome
const movieUl = document.querySelector('#movieTimelineUl')
const movieTimelineImg = document.querySelectorAll('.timelineImg')

const sendGetRequest = async () => {
    try {
        for (let index = 1; index <= 2; index++) {
            let res = await axios.get(`http://www.omdbapi.com/?i=tt2015381&apikey=15f5244a`)
            let data = await res.data
            if (index > 1) {
                res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=15f5244a`)
                data = await res.data
            }

            let newLi = document.createElement('li')
            newLi.className = 'movieLi'
            let newImg = document.createElement('img')
            newImg.src = `${data.Poster}`
            newImg.className = 'timelineImg'
            let newDiv = document.createElement('div')
            newDiv.className = 'divClass'
            newDiv.innerHTML = `${data.Title}`
            newDiv.setAttribute("imdbID", `${data.imdbID}`)

            let viewMoreForm = document.createElement('a')
            viewMoreForm.innerText = 'VIEW MORE'
            viewMoreForm.href = './viewMore.html'
            viewMoreForm.className = 'viewMoreButton'


            movieUl.appendChild(newLi)
            newLi.appendChild(newImg)
            newLi.appendChild(newDiv)
            newLi.appendChild(viewMoreForm)

        }

    }
    catch (e) {
        console.log(e, "lksdl;askd;l")
    }

}

sendGetRequest()

movieUl.addEventListener('mouseover', (e) => {
    if (e.target.className == "timelineImg" || e.target.className == "viewMoreButton") {
        e.target.parentElement.children[0].style.webkitFilter = "brightness(0.4)"
        if (e.target.className == "timelineImg") {
            e.target.addEventListener('mouseleave', () => {
                if (e.target.className != "viewMoreButton")
                    e.target.parentElement.children[0].style.webkitFilter = "brightness(1)"
            })
        }
    }

})

movieUl.addEventListener('click', (e) => {
    if (e.target.className == "viewMoreButton") {
        let passedData = e.target.parentElement.children[1].getAttribute("ImdbID");
        localStorage.setItem('movie', `${passedData}`)
    }

})

// export default passedData;