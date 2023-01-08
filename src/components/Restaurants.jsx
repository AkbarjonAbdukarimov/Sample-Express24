import { categories, populateRestaurants } from "../restaurants"
import { useEffect, useState } from "react"
import Heart from '../images/Heart.svg'
import './Restaurants.css'

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [org, setOrg] = useState([])
    useEffect(() => {
        populateRestaurants().then(res => { setRestaurants(res); setOrg(res) })
    }, [])
    const handleFavourite = (id) => {
        const restauran = restaurants.find(r => r.id === id)
        restauran.cat = `${restauran.cat}, Favourite`
        setRestaurants([...restaurants, restauran])
    }
    const handleLinks = (e) => {
        setRestaurants(org)
        const cat = e.target.innerText;
        cat !== "All" && setRestaurants(org.filter(r => r.cat.replace(" ", '').split(',').find(c => c === cat)))

    }
    return <>
        <div className="mt-3">
            <h2 className='mt-3'>Restaurants</h2>
            {/* <div className="d-flex justify-content-between mb-2">
                <div className="d-flex justify-content-evenly">
                    <div onClick={handleLinks} className="mx-2 links">All</div>
                    {categories.slice(0, 8).map(c => {
                        return <><div onClick={handleLinks} className="mx-2 links">{c}</div></>
                    })}</div>

                <div className="mx-2  links">More</div>
            </div> */}
            <div className="row justify-content-evenly products mb-5">
                {restaurants.map(r => {
                    const { cat, title, id, img } = r
                    return <>
                        <div className="card col-md-4 col-sm-6 col-10 my-2" key={id} >
                            <div>
                                <img src={img} className="card-img-top" alt={title} />
                                <span className={`like-button ${cat.replace(" ", '').split(',').find(c => c === 'Favourite') && 'like-button-active'}`} onClick={() => {

                                    if (!cat.replace(" ", '').split(',').find(c => c === 'Favourite')) { handleFavourite(id) }
                                }
                                }>
                                    <img src={Heart} alt="" />
                                </span>
                            </div>
                            {title && <div className="px-2">
                                <h5 className="fs-6 p-0 m-0">{title}</h5>
                                <p className="p-0 m-0 text-muted">{cat}</p>
                            </div>}
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
}
export default Restaurants