import './Modal.scss';
import { Link } from 'react-router-dom';

function Modal(props) {

    if (!props.show) { return null };

    return (
        <div className="modal">
            <div className="modal__modal-content">
                <div className="modal__modal-content-top">
                    <h2>Please select your concern </h2>
                </div>
                <div className="modal__modal-content-bottom">
                    <div className="modal__modal-content-bottom-left">
                        <h3 className="modal__modal-content-bottom-left-title">Disability</h3>
                        <input type="radio" id="wheelchair" name="wheelchair" value="wheelchair" className="modal__modal-content-bottom-left-input" />
                        <label htmlFor="wheelchair" className="modal__modal-content-bottom-left-label">Mobility</label>
                        <input type="radio" id="Visual impairment" name="Visual impairment" value="Visual impairment" className="modal__modal-content-bottom-left-input" />
                        <label htmlFor="Visual impairment" className="modal__modal-content-bottom-left-label">Visual impairment</label>
                        <input type="radio" id="Hearing impairment" name="Hearing impairment" value="Hearing impairment" className="modal__modal-content-bottom-left-input" />
                        <label htmlFor="Hearing impairment" className="modal__modal-content-bottom-left-label">Hearing impairment</label>
                    </div>
                    <div className="modal__modal-content-bottom-right">
                        <h3 className="modal__modal-content-bottom-right-title">Services</h3>
                        <input type="radio" id="gmail" name="gmail" value="gmail" className="modal__modal-content-bottom-right-input" />
                        <label htmlFor="gmail" className="modal-content-bottom-right-label">Email</label>
                        <input type="radio" id="images" name="images" value="images" className="modal__modal-content-bottom-right-input" />
                        <label htmlFor="images" className="modal-content-bottom-right-label">Images</label>
                        <input type="radio" id="map" name="map" value="map" className="modal__modal-content-bottom-right-input" />
                        <label htmlFor="map" className="modal-content-bottom-right-label">Map</label>
                    </div>
                    <div className='modal__modal-content-bottom-buttons'>
                        <Link to="/map"><button className='modal__modal-content-bottom-buttons-go'>Go</button></Link>
                        <button className='modal__modal-content-bottom-buttons-cancel' onClick={props.onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;