import React from 'react';
import './contact-form.scss'
import closeIcon from '../../images/close.svg'
import {click} from "@testing-library/user-event/dist/click";

const ContactFormPopup = ({closeModal, click}) => {
    return (
        <>
            <div className={click ? 'popup-body active' : 'popup-body'}>
                    <div className="close" onClick={closeModal}>
                        <img src={closeIcon} alt=""/>
                    </div>
                    <h2>Работает</h2>
                    
                    <form>
                        <div className='enter'>
                            <p>Email</p>
                            <input type="text"/>
                        </div>
                        <div className='enter'>
                            <p>ФИО</p>
                            <input type="text"/>
                        </div>
                        <div className="enter">
                            <p>Вопрос</p>
                            <textarea name="" id="" cols="40" rows="10"></textarea>
                        </div>
                        <div className="submit">
                            <input type="submit"/>
                        </div>
                    </form>
                </div>

        </>
    );
};

export default ContactFormPopup;