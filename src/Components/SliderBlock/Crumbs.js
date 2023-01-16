import {useDispatch} from "react-redux";
import { setDataToSlider } from "../../redux/slider/reducer";




const Crumbs = (items) => {

    const dispatch = useDispatch()


    const handleClick = () => {
        dispatch(setDataToSlider(items))
    }

    return(
        <>
            <div className='crumb' onClick={() => {handleClick()}}>
                <p>{items.name} <br/> {items.age}</p>
            </div>
        </>
    )
}
export default Crumbs
