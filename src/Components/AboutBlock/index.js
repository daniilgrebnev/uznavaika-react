import data from '../../data/about-items.json'
import AboutItem from "./AboutItem";
import './about-block.scss'

const AboutBlock = () =>{
    return(
        <>
            <div className="about">
                <div className="container">
                    <h2>О нас</h2>
                    <div className="about-items">
                        {
                            data.map(items => (
                                <AboutItem key={items.id} {...items}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutBlock