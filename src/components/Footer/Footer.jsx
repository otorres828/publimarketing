import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>Diseñado por: @otorres828</SocialLogo>
						<SocialIcons>
							<SocialIconLink
								href='https://www.facebook.com/publimarketingvzla'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='https://www.youtube.com/@publimarketing.v'
								target='_blank'
								aria-label='YouTube'
								rel='noopener noreferrer'
							>
								<FaYoutube />
							</SocialIconLink>
							{/* <SocialIconLink
								href='/'
								target='_blank'
								aria-label='Twitter'
								rel='noopener noreferrer'
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Linkedin'
								rel='noopener noreferrer'
							>
								<FaLinkedin />
							</SocialIconLink> */}
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
