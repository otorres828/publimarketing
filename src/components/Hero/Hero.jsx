import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<NavBar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroContent>
				<HeroItems>
					<HeroH1>hazte notar</HeroH1>
					<HeroP>lleva tu marca al next level</HeroP>
					<HeroBtn>Ver Planes</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
