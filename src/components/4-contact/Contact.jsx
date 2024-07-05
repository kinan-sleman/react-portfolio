import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("mrbzgoeb");
  return (
    <section className="contact-us">
      <h1 className=" title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new
      </p>
      <div style={{ justifyContent: "space-between" }} className=" flex">
        <form onSubmit={handleSubmit} className="" action="">
          <div>
            <label htmlFor="email">Email Address: </label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Your message: </label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="flex success-message">
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your Message Has Been Sent Successfully 👌
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 300 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
