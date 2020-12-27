import React, { useState, useEffect } from 'react';

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
				<h3 className="modal__title">I'm a modal!</h3>
				<p>
					loerm
				</p>
				
				<button type="button" onClick={onRequestClose}>
					Close this modal
				</button>
			</div>
		</div>
	);
};
export default Modal;




