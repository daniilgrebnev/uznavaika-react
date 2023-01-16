import { useState } from 'react'
import img from '../../images/FAQ/down-icon.svg'

const FaqItem = items => {
	let [click, setClick] = useState(0)
	const handlerClick = c => {
		setClick((click = !click))
	}
	return (
		<>
			<div className='item-wrapper'>
				<div
					className={click ? 'question active' : 'question'}
					onClick={() => handlerClick(items.id)}
				>
					<h3>{items.title}</h3>
					<img className={click ? 'active' : ''} src={img} alt='' />
				</div>
				<div className={click ? 'faq-text active' : 'faq-text'}>
					<p>{items.text}</p>
				</div>
			</div>
		</>
	)
}
export default FaqItem
