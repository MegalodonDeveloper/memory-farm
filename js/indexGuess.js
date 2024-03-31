
var orginalevent = document.querySelector('.navbar')
document.getElementById('burgermenu').addEventListener("click", function(){
    document.querySelector('.navbar').classList.add("is-active")
},false);
document.getElementById('main-nav_id').addEventListener("click", function(){
    document.querySelector('.navbar').classList.remove("is-active")
},false);

document.addEventListener('DOMContentLoaded', () => {
    const cardArray =[
        {
            name: 'sandwich',
            img: 'image/sandwich.png'
        },
        {
            name: 'sandwich',
            img: 'image/sandwich.png'
        },
        {
            name: 'monkey',
            img: 'image/monkey.png'
        },
        {
            name: 'monkey',
            img: 'image/monkey.png'
        },
        {
            name: 'cloud',
            img: 'image/cloud.png'
        },
        {
            name: 'cloud',
            img: 'image/cloud.png'
        },
        {
            name: 'smartphone',
            img: 'image/smartphone.png'
        },
        {
            name: 'smartphone',
            img: 'image/smartphone.png'
        },
        {
            name: 'tablet',
            img: 'image/tablet.png'
        },
        {
            name: 'tablet',
            img: 'image/tablet.png'
        },
        {
            name: 'ostrich',
            img: 'image/ostrich.png'
        },
        {
            name: 'ostrich',
            img: 'image/ostrich.png'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const progress = document.querySelector('#report')
    var cardChosen = []
    var cardChosenId = []
    var cardWon = []
    const displayResult = document.querySelector('#result')
    function createBoard(){
        for (let i =0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','image/rubik.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flibCard)
            grid.appendChild(card)
        }
    }
    function checkforMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if (cardChosen[0] === cardChosen[1]) {
            progress.textContent = 'You Found A Match !'
            cards[optionOneId].setAttribute('src', 'image/tick.png')
            cards[optionTwoId].setAttribute('src', 'image/tick.png')
            cardWon.push(cardChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'image/rubik.png')
            cards[optionTwoId].setAttribute('src', 'image/rubik.png')
            progress.textContent = 'False, Try Again !'
        }
        cardChosen = []
        cardChosenId = []
        displayResult.textContent = cardWon.length
        if (cardWon.length === cardArray.length/2){
            displayResult.textContent = 'Congratulaions!'
        }
    }
    function flibCard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2){
            setTimeout(checkforMatch, 500)
        }
    }
    createBoard()
})