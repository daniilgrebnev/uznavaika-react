import data from "../../data/bread-crumbs.json";
import Crumbs from "./Crumbs";
import SliderView from "./SliderView";
import './second-block.scss'
// import {useSelector} from "react-redux";


const SliderBlock = () => {
	// const item = useSelector(state => state.slider.dataToSlider)
	// let counter = item.length - 1
	// const imageFileName = item[counter].img
	// const totalImageUrl = '' + imageFileName
	// const styles = {
	// 	background: `url(${totalImageUrl})`
	// }
	return (
		<>
			<div className='second-block'>
				<div className='container'>
					<h2>Наши услуги</h2>
					<div className="bread-crumbs" >
						{
							data.map(items => (
								<Crumbs id={items.id} {...items} />
							))
						}
					</div>
					<div className="view">
						<div className="back-black">
							<SliderView />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default SliderBlock
