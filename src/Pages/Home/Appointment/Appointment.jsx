import React from 'react';
import './Appointment.css'
import Button1 from '../../../Component/Button1/Button1';

const Appointment = () => {
  return (
    <div className='appointment'>
        <div className="cointainer">
            <div className="apointment-content">
                <h4>Need a Doctor for Check-up? </h4>
                <h2>We provide the best medical services for you and your family.</h2>
                <Button1 ButtonText={'Get Appointment'} />
            </div>
        </div>
    </div>
  )
}

export default Appointment