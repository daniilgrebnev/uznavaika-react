import React from 'react'
import { useDispatch } from 'react-redux'
import { setDataToSlider } from '../../redux/slider/reducer'

const CrumbsMobile = (items, openBurgerHandler, click) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(setDataToSlider(items))
		openBurgerHandler()
	}
	return (
		<>
			<div
				className='crumb-mobile'
				onClick={() => {
					handleClick()
				}}
			>
				<p>
					{items.name} <br /> {items.age}
				</p>
			</div>
		</>
	)
}

export default CrumbsMobile
