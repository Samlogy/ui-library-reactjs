import React, { useState, useEffect } from 'react';
import { GrFormClose } from 'react-icons/gr';

import './style.css';

const Modal = ({ onRequestClose }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) onRequestClose(); // Close the modal when the Escape key is pressed
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal__backdrop" onClick={onRequestClose}>
			<div className="modal__container">
				<div className="modal-header">
					<GrFormClose className="close-icon" />
					<h3>I'm a modal!</h3>
				</div>

				<div className="modal-body">
					<p> Show the modal Show the modal Show the modal Show the modal Show the modal Show the modal </p>
				</div>

				<div className="modal-footer">
					<button type="button" onClick={onRequestClose}>
						Close this modal
					</button>
				</div>
			</div>
		</div>
	);
};
export default Modal;





