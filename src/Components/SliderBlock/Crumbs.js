import {useDispatch} from "react-redux";
import {setDataToSlider} from "../../redux/slider/reducer";
import {useState} from "react";



const Crumbs = (items) => {
    let [active, setActive] = useState(false)
    let [click, setClick] = useState(false)

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setDataToSlider(items))
        setClick(click = !click)
            if (click){
                setActive(active = true)
            } else {
                setActive(active = false)
            }
    }

    return(
        <>
            <div className={active ? 'crumb active' : 'crumb' } onClick={handleClick}>
                <p>{items.name} <br/> {items.age}</p>

            </div>
        </>
    )
}
export default Crumbs
