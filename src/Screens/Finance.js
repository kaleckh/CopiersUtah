import React, { useState, useRef } from 'react';
import Header from '../Components/Header';
import { Handshake } from '../SVG/Handshake';
import { Signature } from '../SVG/Signature';
// import { Handshake } from '../SVG/Handshake';
// import { Handshake } from '../SVG/Handshake';
import Form from '../Components/Form';
import Logo from '../Photos/logo.png';
import Menu from '../Photos/menu.png';
import Repair from '../Photos/repair.jpg';
import styles from '../Screens/Finance.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Finance = () => {
	const [ toggle, setToggle ] = useState(false);
	const [ quoteToggle, setQuoteToggle ] = useState(true);
	const navigate = useNavigate();
	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
	
	console.log(process.env.REACT_APP_RECAPTCHA_SITE_KEY, "this is the env without quotes")
	return (
		<div className={styles.main}>
			<div>
				<TawkMessengerReact
					onLoad={onLoad}
					propertyId="5abd4931d7591465c7090c65"
					widgetId="default"
					useRef={tawkMessengerRef}
				/>
			</div>
			<div className={styles.logoSpaceContainer}>
					<div className={styles.logoSpace}>
					<img className={styles.logo} src={Logo} alt="" />
					<div className={styles.titleContainer} />
					<div className={styles.columnContainer}>
						<div className={styles.infoBig}>Copiers Utah</div>
						<div className={styles.mediumColumn}>
							<div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
							<div className={styles.infoSmall}>info@copiersutah.com</div>
						</div>
					</div>
				</div>
			</div>
			<Header />
			<div id="quote" className={styles.secondSection}>
				<div className={styles.eighty}>
					<div className={styles.title}>Copiers Utah offers short and long term copier rentals.</div>
					<div className={styles.row}>
						<div className={styles.column}>
							<div className={styles.woman} />
						</div>
						{toggle ? (
							<div>
								<Form
									quote={() => {
										setToggle(false)
										setQuoteToggle(false)
									}}
								/>
							</div>
						) : (

							<div className={styles.center}>
								{quoteToggle ? <><div className={styles.titleBig}>Financing Made Easy</div>
								<div className={styles.paragraph}>
									We know how it can be stressful finding a printer. That's why we've made it easier
									than ever to find your next one and get you all your information on it
								</div>
								<button
									onClick={() => {
										setToggle(!toggle);
									}}
									className={styles.button}
								>
									Get Your Terms
								</button></> : <div className={styles.title} style={{width:"140%", fontWeight:"300"}}>Awesome, we will be contacting you shortly!</div>}
								
							</div>
						)}
					</div>
				</div>
			</div>
			<div className={styles.centerLine}>
				<div className={styles.line} />
			</div>

			<div className={styles.thirdSection}>
				<div />
				<div className={styles.title} style={{ fontWeight: '600' }}>
					Why Choose Copiers Utah?
				</div>
				<div className={styles.optionContainer}>
					<div className={styles.optionsContainer}>
						
						<div className={styles.smallTitle}>Rent To Own</div>
						<div className={styles.info}>
							As you make your rental payments, you'll be one step closer to owning your copier outright.
						</div>
					</div>
					<div className={styles.optionsContainer}>
						
						<div className={styles.smallTitle}>Easy Leases</div>
						<div className={styles.info}>
							Our leases are designed to fit your budget and your business needs, with fliexible terms and
							no hidden fees!
						</div>
					</div>
					<div className={styles.optionsContainer}>
						<div className={styles.smallTitle}>Hastle Free</div>
						<div className={styles.info}>
							We handle everything! You can focus on your business while we handle the printer needs
						</div>
					</div>
				</div>
				<a href="#quote">
					<button
						onClick={() => {
							setToggle(!toggle);
						}}
						className={styles.button}
					>
						Get your terms
					</button>
				</a>
			</div>

			<Footer />
		</div>
	);
};

export default Finance;
