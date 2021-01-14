import React, { useState } from 'react';

import './style.css';

const Card = props => {
	const { type, msg } = props;

	return 	<div className="cards-container">
				<div className="card">
					<div className="card-header">

					</div>
					<div className="card-body">
						<span> Video </span>
						<h2> Boost your knowledge with Method </h2>
						<p> Boost your knowledge with MethodBoost your knowledge with MethodBoost your knowledge with MethodBoost your knowledge with MethodBoost your knowledge with MethodBoost your knowledge with Method </p>
					</div>

					<div className="card-footer">
						<div> AVATAR </div> <div> fullName Dec 26, 2020 * 6min read </div>
					</div>
				</div>
			</div>
};

export default Card;