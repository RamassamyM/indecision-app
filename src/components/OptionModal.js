import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
        <Modal
        isOpen={!!props.selectedOption} // transform in boolean
        //   onAfterOpen={afterOpenFn}
        onRequestClose={props.handleCloseOptionModal} // if we click around or escape
        contentLabel="Selected Option"  // for accessibility purpose
        closeTimeoutMS={200}
        className="modal"
        >
        <h3 className="modal__text">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button"onClick={props.handleCloseOptionModal}>Okay</button>
        </Modal>
);

export default OptionModal;
