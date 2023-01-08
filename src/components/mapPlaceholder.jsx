import Marker from '../images/Marker.svg'
import './mapPlaceholder.css'
const MapPlaceholder = ({ address }) => {
    return <>
        <div className="w-100 d-flex justify-content-lg-center align-items-center parent map-placeholder">
            <div className=''>
                <img className='marker' src={Marker} alt="" />
            </div>
            <div>
                <p className='m-0 '>{address}</p>
            </div>
        </div>


    </>
}
export default MapPlaceholder