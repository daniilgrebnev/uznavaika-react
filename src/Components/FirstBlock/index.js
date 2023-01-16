import './first-block.scss'
import img from '../../images/2.jpg'
const FirstBlock = () => {
	return (
		<div className='first-block'>
			<div className='container'>
				<div className='text'>
					<h1>Детство - самое прексрасное время</h1>
					<p>
						Детский развивающий центр УЗНАВАЙКА приглашает вас в мир новых
						знаний, творчества и открытий!
					</p>
					<button>Заказать звонок</button>
				</div>
				<div className='img'>
					<img src={img} alt='' />
				</div>
			</div>
		</div>
	)
}
export default FirstBlock
