import React, { useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Logo from '../Photos/logo.png';
import styles from '../Screens/Products.module.css';
import { useNavigate } from 'react-router-dom';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
const Products = () => {
	const navigate = useNavigate();
	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
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
			<div
				style={{
					height: '80%',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center'
				}}
			>
				<div className={styles.color}>Our Products</div>
				<div className={styles.centerLine}>
					<div className={styles.line} />
				</div>
				<div className={styles.row}>
					<div className={styles.title}>Lexmark</div>
					<div className={styles.title}>Konica Minolta</div>
					<div className={styles.title}>Epson</div>
				</div>
				<div className={styles.copierRow}>
					<div
						onClick={() => {
							navigate('/Lexmark');
						}}
						className={styles.copierContainer}
					>
						<div className={styles.lexmark} />
					</div>
					<div
						className={styles.copierContainer}
						onClick={() => {
							navigate('/Konika');
						}}
					>
						<div className={styles.konika} />
					</div>
					<div
						className={styles.copierContainer}
						onClick={() => {
							navigate('/Epson');
						}}
					>
						<div style={{marginTop:"40px"}} className={styles.epson} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
