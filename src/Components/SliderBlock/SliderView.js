import {useSelector} from "react-redux";


const SliderView = () => {
    const item = useSelector(state => state.slider.dataToSlider)
    let counter = item.length - 1
    return(
        <>
            <div className="text">
                <div>
                    {item.length > 0 ? (
                        <h2>{item[counter].name}</h2>
                    ) : (
                        <b>Выберете услугу что бы узнать подробнее</b>
                    )}
                </div>
                <p>
                    {item.length > 0 ? (
                        item[counter].title
                    ) : (
                       <></>
                    )}
                </p>
                <ul>
                    {item.length > 0 ? (
                        <>
                            <li>{item[counter].list.list1}</li>
                            <li>{item[counter].list.list2}</li>
                            <li>{item[counter].list.list3}</li>
                            <li>{item[counter].list.list4}</li>
                            <li>{item[counter].list.list5}</li>
                            <li>{item[counter].list.list6}</li>
                            <li>{item[counter].list.list7}</li>
                            <li>{item[counter].list.list8}</li>
                        </>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
        </>
    )
}
export default SliderView