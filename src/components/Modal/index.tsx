import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

import { CloseIcon, ModalBody, ModalPageSpan } from './ModalElements';

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
		<>
			{showModal ? (
				<ModalPageSpan>
					<ModalBody>
						<CloseIcon onClick={handleClose} />
						{children}
					</ModalBody>
				</ModalPageSpan>
			) : null}
		</>
	);
};

export default Modal;
