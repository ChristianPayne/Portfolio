import React, { Component, useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");


class ProjectModal extends Component {
  
  [this.modalIsOpen, this.setModalIsOpen] = useState(false);

  render() {
    return (
      <div>
        {/* TODO: Modal */}
        <Modal isOpen={this.modalIsOpen} onRequestClose={()=> {this.setModalIsOpen(false)}}>
          
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
