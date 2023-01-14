import {useState} from "react";
import img from "../../images/FAQ/down-icon.svg"

const FaqItem = (items) => {
    let [position, setPosition] = useState(0)
    let [color, setColor] = useState('white')
    let [rotate, setRotate] = useState('270deg')
    let [clicked, setClicked] = useState(false)
    const style = {
        maxHeight:position,
        color:color
    }
    const iconStyle = {
        transform: `rotate(${rotate})`,

    }
    const handlerClick = () => {
        setClicked(clicked = !clicked)

        if (clicked){
            setPosition(position = 0)
            setColor(color = 'white')
            setRotate(rotate = '270deg')
        }else {
            setPosition(position = 200)
            setColor(color = 'black')
            setRotate(rotate = '360deg')
        }

    }
  return(
      <>
        <div className="item-wrapper">
          <div className="question" onClick={handlerClick}>
            <h3>{items.title}</h3>
              <img style={iconStyle} src={img} alt="" />
          </div>
          <div className="faq-text" style={style}>
            <p>{items.text}</p>
          </div>
        </div>

      </>
  )
}
export default FaqItem