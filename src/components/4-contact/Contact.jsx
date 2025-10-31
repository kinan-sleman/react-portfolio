import "./contact.css";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import { useForm as useHookForm } from "react-hook-form";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";
export default function Contact() {
  const [state, formspreeHandleSubmit] = useFormspree("mrbzgoeb");
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useHookForm();
  const onSubmit = (data) => {
    formspreeHandleSubmit(data);
  };
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
        <form onSubmit={hookFormHandleSubmit(onSubmit)} className="" action="">
          <div>
            <label htmlFor="email">Email Address: </label>
            <div>

              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {

                    value: /^\S+@\S+$/i,
                    message: "Email syntax is invalid"
                  }
                })}
              />
              {errors.email && <p className="validation-error">{errors.email.message}</p>}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Your message: </label>
            <div>
              <textarea
                id="message"
                {...register("message", { required: "Message Is Required" })}
              ></textarea>
              {errors.message && <p className="validation-error">{errors.message.message}</p>}

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
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