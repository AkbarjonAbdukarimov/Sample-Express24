import './map.css'

const Map = ({ mapState, closeMap, address, setAddress }) => {
    const handleChange = (e) => {
        setAddress(e.target.value)
    }
    return <>
        <div className='map-container d-flex justify-content-center align-items-center'>
            <div className="container w-50 map p-3">
                <div className="d-flex align-items-center justify-content-between ">
                    <h2>Enter Delivery Address</h2>
                    <button type="button" class="btn-close" onClick={closeMap} ></button>
                </div>
                <div>
                    <div className=" parent" >
                        <div className='m-2 w-100'>
                            <input className='w-100' onChange={handleChange} value={address} type="text" placeholder='Place, meal, product or restauran' />
                        </div>
                    </div>
                    <div className="my-2"> <iframe title='map' className='w-100' src="https://yandex.com/map-widget/v1/-/CCUvEGHjOC" ></iframe></div>

                </div>
            </div>
        </div></>
}
export default Map