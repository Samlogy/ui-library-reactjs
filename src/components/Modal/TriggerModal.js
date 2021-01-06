import React, { useState } from 'react';
import Modal from './Modal';

import './style.css';

const TriggerModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{isOpen && <Modal onRequestClose={toggleModal} />}
			<button onClick={toggleModal} type="button">
				Show the modal
			</button>
		</>
	);
};

export default TriggerModal;