import data from '../../data/bread-crumbs.json'
import Crumbs from './Crumbs'
import SliderView from './SliderView'
import './second-block.scss'
import CrumbsMobile from './CrumbsMobile'
import { useState } from 'react'

const SliderBlock = () => {
	// const item = useSelector(state => state.slider.dataToSlider)
	// let counter = item.length - 1
	// const imageFileName = item[counter].img
	// const totalImageUrl = '' + imageFileName
	// const styles = {
	// 	background: `url(${totalImageUrl})`
	// }
	let [click, setClick] = useState(false)
	const openBurgerHandler = () => {
		setClick((click = !click))
	}
	return (
		<>
			<div className='second-block'>
				<div className='container'>
					<h2>Наши услуги</h2>
					<div className='bread-crumbs'>
						{data.map(items => (<Crumbs key={items.id} {...items} /> ))}
					</div>
					<div className='burger' onClick={openBurgerHandler}>
						<div className={click ? 'burger-crumb active' : 'burger-crumb'}>
							<p>Выбрать</p>
							<div className='burger-icon'>
								<span className={click ? 'active' : ''}></span>
							</div>
						</div>
						<div
							className={
								click ? 'bread-crumbs-mobile active' : 'bread-crumbs-mobile'
							}
						>
							{data.map(items => (
								<CrumbsMobile
									key={items.id}
									{...items}
									openBurgerHandler={openBurgerHandler}
									click={click}
								/>
							))}
						</div>
					</div>
					<div className='view'>
						<div className='back-black'>
							<SliderView />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default SliderBlock
