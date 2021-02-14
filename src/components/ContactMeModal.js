import React, {useState} from 'react';
import Modal from "react-modal";

const ContactMeModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Modal isOpen={modalIsOpen}>
      <button onClick={() => {setModalIsOpen(false)}}>Close</button>
      <div className="flex bg-green-400 justify-around m-6 w-1/2 mx-auto">
        <button className="p-4 bg-gray-800 rounded-2xl text-xl">Connect</button>  
        <button className="p-4 bg-gray-800 rounded-2xl text-xl">Call</button>
        <button className="p-4 bg-gray-800 rounded-2xl text-xl">Email</button>
      </div>
    </Modal>
  );
}

export default ContactMeModal;
