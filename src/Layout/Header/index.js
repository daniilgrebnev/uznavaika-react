import './header-style.scss'
import logo from '../../images/logo.svg'
import vkicon from '../../images/vkontakte.svg'
import telegramicon from '../../images/telegram.svg'
import watsappicon from '../../images/watsapp.svg'

const Header = () => {
	return (
		<>
			<header>
				<div className='container'>
					<div className='img'>
						<img src={logo} alt='' />
					</div>
					<div className='email'>danilgrebneff@yandex.ru</div>
					<div className='phones'>
						<p>999 9999 999 0</p>
						<p>999 9999 999 0</p>
					</div>
					<div className='social'>
						<a href='../../../../Работа/uznavaika-next/pages/components'>
							<img src={watsappicon} alt='' width={30} height={30} />
						</a>
						<a href='../../../../Работа/uznavaika-next/pages/components'>
							<img src={vkicon} alt='' width={30} height={30} />
						</a>
						<a href='../../../../Работа/uznavaika-next/pages/components'>
							<img src={telegramicon} alt='' width={30} height={30} />
						</a>
					</div>
				</div>
			</header>
		</>
	)
}
export default Header
