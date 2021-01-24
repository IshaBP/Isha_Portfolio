import React, { useState } from 'react';

type ModalProps = {
  defaultShow: boolean;
  children: React.ReactNode;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  defaultShow,
  children
}: ModalProps) => {
  const [showModal, setShowModal] = useState(defaultShow);

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

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
