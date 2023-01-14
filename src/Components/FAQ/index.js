import FaqItem from "./FaqItem";
import data from "../../data/faq-items.json"
import './faq-block.scss'

const FAQBlock = () => {
    return(
        <>
            <div className="faq">
                <div className="container">
                    <h2>Ответы на вопросы</h2>
                    <div className="faq-items">
                        {
                            data.map(items => (
                                <FaqItem key={items.id} {...items} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQBlock