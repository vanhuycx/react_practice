const getCockTailData = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

    try {
        const allDrinks = await fetch(url)
                .then(response => response.json())
                .then(resposne=>resposne.drinks)
        return allDrinks
        
    } catch (error) {
        console.log(error)
    }
}


const renderData = async () => {
    const allDrinks = await  getCockTailData()
    let html = ''

    console.log(allDrinks)

    allDrinks.forEach((drink) => {
        let htmlPortion = `

                        <div class="cocktail">
                            <h3>${drink.strDrink}</h3>
                            <img class='cocktail-img' src=${drink.strDrinkThumb} alt="">
                        </div>
                            `
        html += htmlPortion
    })
    const cocktailContainer = document.querySelectorAll('.cocktail-container')[0]
    cocktailContainer.innerHTML = html
}

renderData()








// const getJSONData = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/'

//     try {
//         const data = await fetch(url)
//                 .then(response => response.json())
//         return data
        
//     } catch (error) {
//         console.log(error)
//     }
// }