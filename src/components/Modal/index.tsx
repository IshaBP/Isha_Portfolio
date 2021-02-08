import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import { ModalWrapper } from './ModalElements';

type ModalProps = {
	defaultShow?: boolean;
	onClose?: () => void;
	children: React.ReactNode;
};

const Modal: React.FunctionComponent<ModalProps> = ({
	defaultShow = false,
	onClose = () => {},
	children,
}: ModalProps) => {
	const [showModal, setShowModal] = useState(defaultShow);

	const handleClose = () => {
		onClose();
		setShowModal(false);
	};

	return (
		<ModalWrapper>
			{showModal ? (
				<div className="modal">
					<section className={`modal-main`}>
						<FaWindowClose onClick={handleClose} className="close-icon" />
						{children}
					</section>
				</div>
			) : null}
		</ModalWrapper>
	);
};

export default Modal;
