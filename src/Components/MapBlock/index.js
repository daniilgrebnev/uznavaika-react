import React from 'react'
import './map-block.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const MapBlock = () => {
	const defaultState = {
		center: [51.670395, 39.165117],
		zoom: 17,
	}

	return (
		<>
			<div className='map-block'>
				<div className='container'>
					<h2>Мы на карте</h2>
					<div className='map'>
						<YMaps>
							<Map defaultState={defaultState} width='100%' height='600px'>
								<Placemark geometry={[51.670495, 39.164937]} />
							</Map>
						</YMaps>
					</div>
				</div>
			</div>
		</>
	)
}

export default MapBlock
