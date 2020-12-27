import React, { useState } from 'react';
import Modal from './Modal';

import './style.css';

const TriggerModal = () => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	
	console.log(useState("hello")[1])
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

	return (
		<main>
			{isModalOpen && <Modal onRequestClose={toggleModal} />}
			<button onClick={toggleModal} type="button">
				Show the modal
			</button>
		</main>
	);
};

export default TriggerModal;