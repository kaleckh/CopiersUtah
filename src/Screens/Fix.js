import React, { useRef } from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Logo from '../Photos/logo.png';
import Menu from '../Photos/menu.png';
import Repair from '../Photos/repair.jpg';
import styles from '../Screens/Fix.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Fix = () => {
	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
	const navigate = useNavigate();
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
			<div className={styles.secondSection}>
				<div className={styles.container}>
					<div className={styles.black}>Schedule A Maintanance Call!</div>
					<div style={{width:"95%"}}>
						<div className={styles.number}>1</div>
						<input
							className={styles.inputSingle}
							placeholder="First Name"
							type="text"
							name=""
							id=""
							required={true}
						/>
					</div>
					<input
						className={styles.inputSingle}
						type="tel"
						name="telphone"
						placeholder="Phone Number"
						pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
						maxlength="12"
						title="Ten digits code"
						required
					/>
					<input className={styles.inputSingle} type="text" placeholder="Zip Code" />
					<div className={styles.line} />
					<div className={styles.numberContainer}>
						<div className={styles.number}>2</div>
						<div className={styles.light}>Extra Information</div>
					</div>
					<select className={styles.selected} id="year">
						<option value="hide">Best time to call</option>
						<option value="2010">Morning</option>
						<option value="2010">Afternoon</option>
						<option value="2010">Evening</option>
					</select>
					<textarea
						className={styles.inputSingle}
						type="text"
						name=""
						id=""
						placeholder="What type of service?"
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Fix;
