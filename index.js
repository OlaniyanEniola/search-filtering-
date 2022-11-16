const footBallers = ['Ronaldo', 'Rodrigo', 'Ramos', 'Rakitic', 'Ronaldino', 'Messi', 'Mbappe', 'Maradona', 'Militao', 'Modric', 'Neymar', 'Veratti', 'Vasquez', 'Zidane'];

const searchBarAOS = document.querySelector('.search-bar-AOS');
const searchResultAOS = document.querySelector('.search-result-AOS')

const filterAOS = function (searchAOS) {
    const filteredAOS = footBallers.filter((player) => {
        return player.toLowerCase().includes(searchAOS);
    }).join(", ");
    searchResultAOS.innerHTML = filteredAOS;
    if (searchAOS == '') {
        searchResultAOS.innerHTML = '';
    }
};

searchBarAOS.addEventListener('keyup', (e) => {
    searchAOS = e.target.value.toLowerCase();
    filterAOS(searchAOS);
});


const footBallObj = [
    {
        name: 'Ronaldo',
        club: 'Real Madrid',
        country: 'Portugal'
    },
    {
        name: 'Modric',
        club: 'Real Madrid',
        country: 'Croatia'
    },
    {
        name: 'Militao',
        club: 'Real Madrid',
        country: 'Somewhere'
    },
    {
        name: 'Ramos',
        club: 'PSG',
        country: 'Spain'
    },
    {
        name: 'Ronaldino',
        club: 'Soccer Aid',
        country: 'Brazil'
    },    
    {
        name: 'Messi',
        club: 'PSG',
        country: 'Argentina'
    },
    {
        name: 'Maradona',
        club: 'Soccer Aid',
        country: 'Argentina'
    },
    {
        name: 'Mbappe',
        club: 'PSG',
        country: 'France'
    },
    {
        name: 'Neymar',
        club: 'PSG',
        country: 'Brazil'
    },
];

const searchBarAOO = document.querySelector('.search-bar-AOO');
const searchResultAOO = document.querySelector('.search-result-AOO')

const filterAOO = function (searchAOO) {
    let pushedFromAOO = [];
    footBallObj.forEach((player) => {
        if (player.name.toLowerCase().includes(searchAOO) ||
            player.club.toLowerCase().includes(searchAOO) ||
            player.country.toLowerCase().includes(searchAOO)) {
            includedNames = player.name;
            pushedFromAOO.push(includedNames);
        }
    });
    searchResultAOO.innerHTML = pushedFromAOO;
    if (searchAOO == '') {
        searchResultAOO.innerHTML = '';
    }
    return pushedFromAOO;
}

searchBarAOO.addEventListener('keyup', (e) => {
    searchAOO = e.target.value.toLowerCase();
    filterAOO(searchAOO);
});


const select = document.querySelector('select');
const selectResult = document.querySelector('.select-result');


const selectFilter = function (selectedFilter) {
    let pushedFromSelected = [];
    footBallObj.forEach((player) => {
        if (player.country.includes(selectedFilter)) {
            let selectedPlayers = player.name;
            pushedFromSelected.push(selectedPlayers);
        }
    });
    selectResult.innerHTML = pushedFromSelected;
    return pushedFromSelected;
}

select.addEventListener('change', (e) => {
    let selectedFilter = e.target.value;
    selectFilter(selectedFilter);
})

console.log(selectFilter('Portugal'));














// const testArr = [
//     { name: 'bike', price: 100 },
//     { name: 'pan', price: 50 }
// ]
// const filterTest = (input) => {
//     let filtArr = [];
//     testArr.forEach((item) => {
//         if (item.name.includes(input) || item.price.toString().includes(input)) {
//             answer = item.name;
//             filtArr.push(answer);
//         } 
//     });
//     return filtArr;
// }


// console.log(filterTest('pan'));








