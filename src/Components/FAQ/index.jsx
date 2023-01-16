import FaqItem from './FaqItem'

import './faq-block.scss'

const FAQBlock = () => {
	const data = [
		{
			title: 'Как мы называемся?',
			text: 'Узнавайка',
			id: 1,
		},
		{
			title: 'Как мы называемся?',
			text: 'Узнавайка',
			id: 2,
		},
		{
			title: 'Как мы называемся?',
			text: 'Узнавайка',
			id: 3,
		},
		{
			title: 'Как мы называемся?',
			text: 'Узнавайка',
			id: 4,
		},
		{
			title: 'Как мы называемся?',
			text: 'Узнавайка',
			id: 5,
		},
	]

	return (
		<>
			<div className='faq'>
				<div className='container'>
					<h2>Ответы на вопросы</h2>
					<div className='faq-items'>
						{data.map(items => (
							<FaqItem key={items.id} {...items} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
export default FAQBlock
