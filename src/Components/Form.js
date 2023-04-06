import React from "react";
import styles from "../Components/Form.module.css";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";

const Form = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.black}>{props.title}</div>
      <div className={styles.space}>
        <div className={styles.number}>1</div>

        <input
          placeholder="First Name"
          type="text"
          name=""
          id=""
          required={true}
        />
        <input placeholder="Last Name" type="text" name="" id="" />
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

      <input className={styles.inputSingle} type="text" placeholder="Email" />
      <input
        className={styles.inputSingle}
        type="text"
        placeholder="Street Address"
      />
      <div className={styles.space}>
        <input type="text" placeholder="state" />
        <input type="text" placeholder="city" />
      </div>
      <div className={styles.line}></div>
      <div className={styles.numberContainer}>
        <div className={styles.number}>2</div>
        <div className={styles.light}>Extra Information</div>
      </div>
      <select className={styles.selected} id="year">
        <option value="hide">Price Range</option>
        <option value="2010">1,000 - 1,999</option>
        <option value="2010">3,000 - 4,999</option>
        <option value="2010">5,000 - 9,999</option>
        <option value="2010">10,000 - 14,999</option>
        <option value="2010">15,000 - 19,999</option>
      </select>
      <select className={styles.selected} id="year">
        <option value="hide">How Soon Will You Purchase</option>
        <option value="2010">ASAP</option>
        <option value="2011">Next Week</option>
        <option value="2012">A Month</option>
        <option value="2013">Other</option>
      </select>
      <input
        className={styles.inputSingle}
        type="text"
        name=""
        id=""
        placeholder="Anything Else?"
      />
    </div>
  );
};

export default Form;
