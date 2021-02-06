import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import { Card } from '../'
import img from '../../assets/img.jpg'
import './style.css';

const SlideShow = props => {
	const { carouselData, breakPoints } = props;

	

	return 	<div className='carousel-container'>
				<div className='slide-show-btn-container'>
					<button className='slide-show-btn prev'
						onClick={() => this.carousel.slidePrev()}> ❮ </button>
					<button className='slide-show-btn next'
						 onClick={() => this.carousel.slideNext()}> ❯ </button>
				</div>

				<Carousel breakPoints={breakPoints}>
					{ carouselData.map((el, index) => 
						<Card key={index} title={el.title} desc={el.desc} avatar={el.avatar} img={img} 
							  tags={el.tags} readTime={el.readTime}  createdAt={el.createdAt}  /> )}					
				</Carousel>				
			</div>
};

export default SlideShow;