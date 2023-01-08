import { cardCarousel } from '../carousel1'
import Carousel from './carousel/Carousel';
const Shops = () => {
    return <>
        <div className="mt-3">
            <h2 className='mt-3'>Shops</h2>
            <Carousel carousel={cardCarousel} />
        </div>
    </>
}
export default Shops;