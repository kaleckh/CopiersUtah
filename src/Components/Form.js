import React from 'react';
import styles from '../Components/Form.module.css';
import { useNavigate } from 'react-router-dom';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';

const Form = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.black}>Get Your free Quote!</div>
			
			<div style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"80%", alignItems:"center"}}>
				<div className={styles.space}>
					<div className={styles.number}>1</div>
					<input
						className={styles.inputSingle}
						placeholder="Name"
						type="text"
						name=""
						id=""
						required={true}
					/>
				</div>
				<div className={styles.space}>
					<div className={styles.number}>2</div>
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
				</div>

				<div className={styles.space}>
					<div className={styles.number}>3</div>
					<textarea
						placeholder="Comments"
						className={styles.textarea}
						name=""
						id=""
						cols="30"
						rows="10"
						style={{ borderColor: 'rgb(169, 172, 173)' }}
					/>
				</div>
			</div>

			<button onClick={() => {props.quote()}} className={styles.button}>Get My Quote</button>
		</div>
	);
};

export default Form;
