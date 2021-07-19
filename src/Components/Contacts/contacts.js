import React, { useState} from 'react';
import classes from "./contacts.scss";
import Footer from "../Footer/footer_alt";
import axios from 'axios';

const Contacts = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const url1 = 'https://sheet.best/api/sheets/25c88114-88cd-438b-a017-066cc9a056c9';
    const url2 = "https://sheet.best/api/sheets/5e0c7761-3e9a-411e-8356-c9ca84d5bc3a";


    const submitHandler = e => {
        e.preventDefault();
        setFormData({ name: "", email: "", message: "" });
    
        const d = new Date();

        axios.post(Math.random() < 0.5 ? url1 : url2, { ...formData, date: d.toDateString(), time: d.toTimeString() }).then( response => {
            console.log(response.data);
        });
    }
    

    
    return (
        <React.Fragment>
            <div style={{display:"flex", justifyContent:"center"}}>
        <div className={`${classes.container} container`}>
            <form action="#" method="POST" onSubmit={submitHandler}>
                <h1>Contact Us</h1>
                <label for="name">
                    <div className={`${classes.inputHead} inputHead`}>
                        Name
                    </div>
                </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={
                            (e) => {
                                setFormData({ email: formData.email, message: formData.message, [e.target.name]: e.target.value });
                            } 
                        } placeholder="James Bond" />
                <label for="email">
                    <div className={`${classes.inputHead} inputHead`}>
                        E-mail
                    </div>
                </label>
                <input type="text" id="email" name = "email" value = {formData.email} onChange={
                            (e) => {
                                setFormData({ name: formData.name, message: formData.message, [e.target.name]: e.target.value });
                            } 
                        } placeholder="abc@xyz.com" />
                <label for="message">
                    <div className={`${classes.inputHead} inputHead`}>
                        Message
                    </div>
                </label>
                <input type="text" id="message" name = "message" value = {formData.message} onChange={
                            (e) => {
                                setFormData({ email: formData.email, name: formData.name, [e.target.name]: e.target.value });
                            } 
                        } placeholder="Hey there, I wanted to say hi and that" />
                <input type="submit" value="Send message"/>              
            </form>
            <div className={`${classes.mapContainer} mapContainer`}>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=BITS%20Pilani+(NSS%20BITS%20Pilani)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
                </div>
                </div>
            
            <div className={`${classes.container_con} container_con`}>
            <div>
                <form action="#" method="POST" onSubmit={submitHandler}>
                        <h1>Contact Us</h1>
                        <div>
                <label for="name">
                    <div className={`${classes.inputHead_mob} inputHead_mob`}>
                        Name&nbsp;:&nbsp;
                    </div>
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={
                            (e) => {
                                setFormData({ email: formData.email, message: formData.message, [e.target.name]: e.target.value });
                            } 
                        } placeholder="James Bond" />

                        </div>
                        <div>
                            <label for="email">
                    <div className={`${classes.inputHead_mob} inputHead_mob`}>
                        E-mail&nbsp;:&nbsp;
                    </div>
                </label>
                <input type="text" id="email" name = "email" value = {formData.email} onChange={
                            (e) => {
                                setFormData({ name: formData.name, message: formData.message, [e.target.name]: e.target.value });
                            } 
                        } placeholder="abc@xyz.com" />
                        </div>
                        <div>
                            <label for="message">
                    <div className={`${classes.inputHead_mob} inputHead_mob`}>
                        Message&nbsp;:&nbsp;
                    </div>
                            </label>
                            
                <textarea id="message" name = "message" value = {formData.message} onChange={
                            (e) => {
                                setFormData({ email: formData.email, name: formData.name, [e.target.name]: e.target.value });
                            } 
                        } rows="4" cols="50" placeholder="Hey there..."/>
                        </div>
                        <div className="button_form_mob">
                            <input type="submit" value="Send message" />
                        </div>
                    </form>
                    </div>
            <div className={`${classes.mapContainer_mob} mapContainer_mob`}>
                    <div>
                        <span>Find us here</span>
                    </div>
                    <div>
                        <a href="https://www.google.com/maps/place/Birla+Institute+of+Technology+and+Science,+Pilani,+Vidya+Vihar,+Pilani,+Rajasthan+333031/@28.3588163,75.5880204,15z/data=!4m2!3m1!1s0x39131964f43e4575:0x1fbad30854cf884d"><img src='/assets/map.png' /></a>
                    </div> 
            </div>
        </div>

        <Footer></Footer>
        </React.Fragment>
    );
}

export default Contacts;