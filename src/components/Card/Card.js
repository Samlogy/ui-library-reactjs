import React from 'react';

import { Avatar } from '../'
import './style.css';

const Card = props => {
	const { avatar, title, desc, createdAt, readTime, tags, img } = props;

	return 	<div className="cards-container">
				<div className="card">
					<div className="card-header">
						<img src={img} />
					</div>
					<div className="card-body">
						<h2> {title} </h2>
						<p> {desc} </p>
						<div className="tags">
							{ tags.map((el, index) => <span className='tag' key={index}> #{el} </span> )}
						</div>
					</div>

					<div className="card-footer">
						<Avatar name={avatar} size='xs' shape='circle' /> 
						<div>  <span> {createdAt} </span> <span> {readTime} min read </span> </div>
					</div>
				</div>
			</div>
};

export default Card;