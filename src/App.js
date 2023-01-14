import {Provider} from 'react-redux'
import {store} from "./redux";

import Layout from "./Layout";
import AboutBlock from "./Components/AboutBlock";
import SliderBlock from "./Components/SliderBlock";
import FirstBlock from "./Components/FirstBlock";
import FAQ from "./Components/FAQ";
import Header from "./Layout/Header";

function App() {
  return (
    <>
      <Provider store={store}>
            <Header />
            <FirstBlock />
            <AboutBlock />
            <SliderBlock />
            <FAQ />

      </Provider>
    </>
  );
}

export default App;
