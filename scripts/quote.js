localStorage.clear();


const generateBtn = document.querySelector('#generateFact')
const quoteDiv = document.querySelector('#quote')
const body = document.querySelector('body')
const getRequest = async () => {
    try {
        // return (res)
        let res = await axios.get('https://randommarvelquoteapi.herokuapp.com/')
        console.log(res.data)
        quoteDiv.innerHTML = `${res.data.quote}`

    }
    catch (e) {
        console.log(e)
    }
}


generateBtn.addEventListener('click', () => {
    let spinnerDiv = document.createElement('div')
    let spinnerSpan = document.createElement('span')
    spinnerDiv.className = 'spinner-border text-secondary'
    spinnerDiv.setAttribute('role', 'status')
    body.appendChild(spinnerDiv)
    spinnerSpan.className = 'visually-hidden'
    spinnerSpan.innerHTML = 'Loading...'
    spinnerDiv.appendChild(spinnerSpan)
    getRequest().then(() => {
        spinnerSpan.remove()
        spinnerDiv.remove()
    })
})