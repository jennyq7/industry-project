import './GooglePage.scss';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import accessible from '../../assets/Icons/accessibility_new.svg';


function GooglePage() {

    const [show, setShow] = useState(false);

    return (
        <section>
            <div className="homepage">
                <Modal show={show} onClose={() => { setShow(false) }} />
                <button className='homepage__button'><img src={accessible} onClick={() => { setShow(true) }} /></button>
            </div>
        </section>
    )
};

export default GooglePage;