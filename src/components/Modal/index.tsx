import './Modal.scss';

import React, { useState } from 'react';

type ModalProps = {
  defaultShow?: boolean;
  children: React.ReactNode;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  defaultShow = false,
  children
}: ModalProps) => {
  const [showModal, setShowModal] = useState(defaultShow);

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";
  console.log("children", children);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={() => setShowModal(false)}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
