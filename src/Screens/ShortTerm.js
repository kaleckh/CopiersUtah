import React, {useRef} from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Logo from '../Photos/logo.png';
import Menu from '../Photos/menu.png';
import Repair from '../Photos/repair.jpg';
import styles from '../Screens/ShortTerm.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Home = () => {
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
						<div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
						<div className={styles.infoSmall}>info@copiersutah.com</div>
					</div>
				</div>
			</div>
			<Header />
			<div className={styles.secondSection}>
				<div className={styles.title}>Copiers Utah offers short and long term copier rentals.</div>
				<div className={styles.row}>
					<div className={styles.column}>
						<div className={styles.woman} />
					</div>
					<Form title={'Get A Quote'} />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
