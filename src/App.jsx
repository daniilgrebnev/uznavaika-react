import { Provider } from 'react-redux'
import { store } from './redux'
import AboutBlock from './Components/AboutBlock'
import SliderBlock from './Components/SliderBlock'
import FirstBlock from './Components/FirstBlock'
import FAQ from './Components/FAQ'
import Map from './Components/MapBlock'
import Layout from "./Layout";

function App() {
	return (
		<>
			<Provider store={store}>
				<Layout>
					<FirstBlock />
					<AboutBlock />
					<SliderBlock />
					<FAQ />
					<Map />
				</Layout>
			</Provider>
		</>
	)
}

export default App
