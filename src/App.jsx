import { Provider } from 'react-redux'
import { store } from './redux'

import AboutBlock from './Components/AboutBlock'
import SliderBlock from './Components/SliderBlock'
import FirstBlock from './Components/FirstBlock'
import FAQ from './Components/FAQ'
import Header from './Layout/Header'
import Map from './Components/MapBlock'
import Footer from './Layout/Footer'

function App() {
	return (
		<>
			<Provider store={store}>
				<Header />
				<FirstBlock />
				<AboutBlock />
				<SliderBlock />
				<FAQ />
				<Map />
				<Footer />
			</Provider>
		</>
	)
}

export default App
