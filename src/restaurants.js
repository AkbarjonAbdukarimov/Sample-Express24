export const categories = ['Favourite', 'Uzcard', 'New', 'Market', 'Fast Food', 'National', 'Asian', 'Coffetery', 'Pizzeria', 'Healthy', 'European', 'Confectionery', 'Barbeque', 'Products', 'Ice Cream', 'PP']



export const populateRestaurants = async () => {
    const restaurants = [];
    const url = "https://api.unsplash.com/search/photos?client_id=5NoH3_jjcpc8B-14-TsoeQAHPMHmXSQaHc6r7g2yhF4&query=food&page=1&per_page=32"
    const res = await fetch(url);
    const data = await res.json()
    const { results } = data;

    results.forEach(r => {
        const n = Math.floor(Math.random() * 11) + 0
        restaurants.push({
            id: r.id, title: `${categories[n]} food`, img: r.urls.thumb, cat: categories[n]
        })
    })
    return restaurants
}