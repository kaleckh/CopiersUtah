import React, { useRef } from 'react';
import Header from '../Components/Header';
import Logo from '../Photos/logo.png';

import styles from '../Screens/Home.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Home = () => {
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
			<div className={styles.secondSection}>
				<div
					onClick={() => {
						navigate('/buy');
					}}
					className={styles.shadeBig}
					style={{ height: '75%', marginTop: '24px' }}
				>
					<div className={styles.parent}>
						<div className={styles.woman} />
						<div className={styles.padding}>
							<div className={styles.centerLarge}>Buy Or Lease A Copier</div>
						</div>
					</div>
				</div>
				<div className={styles.somethingContainer}>
					<div className={styles.row}>
						<div
							onClick={() => {
								navigate('/fix');
							}}
							className={styles.shade}
						>
							<div className={styles.parent}>
								<div className={styles.repair} />

								<div className={styles.center}>Copier Repair</div>
							</div>
						</div>
						<div className={styles.shade}>
							<div className={styles.parent}>
								<div className={styles.toner} />
								<div className={styles.overlay} />
								<div className={styles.center}>Buy Toner</div>
							</div>
						</div>
					</div>
					<div className={styles.row}>
						<div onClick={() => {navigate('/itWork')}} className={styles.shade}>
							<div className={styles.parent}>
								<div className={styles.itWork} />
								<div className={styles.overlay} />
								<div className={styles.center}>IT Work</div>
							</div>
						</div>
						<div
							onClick={() => {
								navigate('/shortTerm');
							}}
							className={styles.shade}
						>
							<div className={styles.parent}>
								<div className={styles.construction} />
								<div className={styles.overlay} />
								<div className={styles.center}>Short Term Rental</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
