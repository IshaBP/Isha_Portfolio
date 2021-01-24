import './Modal.scss';

import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import { ThemeContext } from '../Themer/themeContext';

type ModalProps = {
  defaultShow?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  defaultShow = false,
  onClose = () => {},
  children
}: ModalProps) => {
  const [showModal, setShowModal] = useState(defaultShow);

  const { isDarkModeActive } = React.useContext(ThemeContext);
  const modeClass = isDarkModeActive ? "dark" : "light";

  const handleClose = () => {
    onClose();
    setShowModal(false);
  };

  return (
    <div>
      {showModal ? (
        <div className="modal">
          <section className={`modal-main ${modeClass}`}>
            <FaWindowClose onClick={handleClose} className="close-icon" />
            {children}
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
