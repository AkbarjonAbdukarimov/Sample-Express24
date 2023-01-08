
const CarouselCard = ({ image, title, desc }) => {
    const c1 = require(`../../images/${image}`)
    return <>
        <div className="card mx-2  " >
            <img src={c1} className="card-img-top" alt="..." />
            {title && <div className="px-2">
                <h5 className=" fs-6 p-0 m-0">{title}</h5>
                <p className="p-0 m-0 text-muted">{desc}</p>
            </div>}
        </div>
    </>
}
export default CarouselCard