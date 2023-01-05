import SearchIcon from '../../images/SearchIcon.svg'
import './search.css'
const SearcButton = () => {
    return <>
        <div className="d-flex justify-content-center align-items-center parent" >
            <div className='me-2'><img src={SearchIcon} alt="" /></div>
            <div className='m-2'><input type="text" placeholder='Place, meal, product or restauran' /></div>
            <div className='ms-2'><button className="search-btn">Search</button></div>
        </div>

    </>
}
export default SearcButton