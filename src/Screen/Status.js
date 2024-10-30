import React from 'react'
import logo from '../Images/cd_foundations-main_logo.png'
import { Link } from 'react-router-dom'

const Status = () => {
  return (
    <div className="status">
    <header>
      <nav>
        <Link to='/'><img src={logo} alt="" /></Link>
      </nav>
    </header>

    <section>
      <div>
        <h2>
          TECH<span>-230</span> PROJECT
        </h2>
        <p>
        TECH-230 is an initiative of the CHUKWUDI DIMKPA FOUNDATION designed to empower 230 youths in Rivers State with in-demand Tech Skills.
        </p>
      </div>

      <div className="form-c">
        <div className="status-form">
          <input
            type="email"
            // value={email}
            name=""
            id=""
            placeholder="Email"
            // onChange={emailCheck}
          />
          <button 
        //   onClick={CheckStatus}
          >Check Status</button>
        </div>
      </div>
    </section>

    {/* <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Example Modal"
      className="two"
      style={{
        overlay: {
          position: "fixed",
          top: "0px",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 12,
          // backgroundColor: "hsl(0, 0%, 0%, .5)",
          backgroundColor: "hsl(0, 0%, 0%, .6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className="confirm confirms">
        <h4>Congratulations, your Harvoxx School account have been activated successfully. Use the following details to access your account.</h4>
        
        <h3  style={{ color: "black" }}>Admission No. <span style={{ color: "green" }}>{Data && Data.admision_no}</span></h3>
        <h3 style={{ color: "black" }}>password: <span style={{ color: "green" }}>{Data && Data.password}</span></h3>
      </div>
    </Modal> */}
  </div>
  )
}

export default Status