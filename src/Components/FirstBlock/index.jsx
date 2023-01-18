import './first-block.scss'
import img from '../../images/2.jpg'
import ContactFormPopup from "../../Layout/ContactFormPopup";

import {useState} from "react";
const FirstBlock = () => {
	let [click, setClick] = useState(false)
	const openModal = () => {
		setClick(click = true)
		document.body.classList.add('popup')
	}
		const closeModal = () => {
			setClick(click = false)
			document.body.classList.toggle('popup')
	}
	return (
		<>
		<div className='first-block'>
			<div className='container'>
				<div className='text'>
					<h1>Детство - самое прексрасное время</h1>
					<p>
						Детский развивающий центр УЗНАВАЙКА приглашает вас в мир новых
						знаний, творчества и открытий!
					</p>
					<button onClick={openModal}>Заказать звонок</button>
				</div>
				<div className='img'>
					<img src={img} alt='' />
				</div>
			</div>

		</div>
		<div className={click ? 'popup-block active' : 'popup-block' }>
			<ContactFormPopup closeModal={closeModal} click={click}/>
		</div>
		</>
	)
}
export default FirstBlock
