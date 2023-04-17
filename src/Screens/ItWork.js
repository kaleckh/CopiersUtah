import React, { useRef, useState } from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Logo from '../Photos/logo.png';
import support from '../Photos/secure.png';

import styles from '../Screens/ItWork.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Home = (props) => {
	const [ quoteToggle, setQuoteToggle ] = useState(true);
	const [ buttonToggle, setButtonToggle ] = useState(true);
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
					<div className={styles.menuRow}>
						<div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
					</div>
				</div>
			</div>
			<Header />
			<div className={styles.secondSection}>
				<div className={styles.titleBig}>
					What we do, <div className={styles.bold}>For You</div>
				</div>
				<div className={styles.row}>
					<div className={styles.sideRowLeft}>
						<div>
							<div className={styles.title}>Ransomware Protection</div>
							<div className={styles.paragraph}>
								Ransomware evolves, anti-ransomware utilities will evolve as well.
							</div>
						</div>
						<div>
							<div className={styles.title}>Backup And Restore</div>
							<div className={styles.paragraph}>
								Allowing users to create backups & restore from backups created earlier.
							</div>
						</div>
						<div>
							<div className={styles.title}>Full Printer Support</div>
							<div className={styles.paragraph}>
								Download drivers, run diagnostic tools & troubleshoot your printer
							</div>
						</div>
						<div>
							<div className={styles.title}>Network Efficiency</div>
							<div className={styles.paragraph}>
								Concept of efficiency can be applied to both local & global scales in a network
							</div>
						</div>
					</div>
					{quoteToggle ? (
						<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
							<div className={styles.itSupport} />
							<button onClick={() => {setQuoteToggle(!quoteToggle)}} className={styles.button}>Request a Quote!</button>
						</div>
					) : (
            <div>
              {buttonToggle? <><Form quote={() => {setButtonToggle(!buttonToggle)}}/></> : <div className={styles.title}>Awesome, you're next in line!</div>}
            </div>

					)}
					<div className={styles.sideRowRight}>
						<div>
							<div className={styles.title}>Secure Collabration and cloud support </div>
							<div className={styles.paragraph}>
								Secure Collaboration can provide secure, fully managed cloud services
							</div>
						</div>
						<div>
							<div className={styles.title}>Fix Broken Hardware </div>
							<div className={styles.paragraph}>
								Replacing hardware that is out of service & installing new hardware
							</div>
						</div>
						<div>
							<div className={styles.title}>Secure And Fast Setup</div>
							<div className={styles.paragraph}>Stay secure with optional verification setup</div>
						</div>
						<div>
							<div className={styles.title}>Software And App Support</div>
							<div className={styles.paragraph}>
								Application support specialist can provide technical support to clients
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
