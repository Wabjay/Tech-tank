import { useState } from "react";
import "./Form.css";
import Buttons from "../Buttons/Buttons";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="form">
        <p className="form_header">Send us a message.</p>
        <div>
        <label htmlFor="name">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="text"
        name="Name"
        required
      />
        </div>
        <div>
        <label htmlFor="phone">Phone</label>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number"
        type="tel"
        name="phone"
        required
      />
      </div>
      <div>
        <label htmlFor="email">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      </div>

      <div>
        <label htmlFor="message">Message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        name="message"
        required
      />
      </div>
      <Buttons
      value="SEND MESSAGE"
      type="submit"
      buttontype="btn orange_btn"
      />
    </form>
  );
};
 
export default Form;

