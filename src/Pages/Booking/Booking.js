import React from 'react'
import Input from '../../components/UI/Input/Input'

const Booking =()=>{
    return(
        <section>
            <h2>Booking an Appointment</h2>
            <div>
                <Input placeholder="Full Name*" type="text"/>
                <Input placeholder="Phone Number*" type="tel"/>
                <Input placeholder="Procedure" type="text"/>
                <Input placeholder="Desired Date" type="Date"/>
            </div>
        </section>
    )
}
export default Booking;