import React from "react";
import { GrMailOption } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

export default function newsLetter() {
  return (
    <section className="contactBox">
      <GrMailOption className="newsLetterIcon" /> <h4>STAY IN TOUCH</h4>
      <p>Sign up for our newsletter to receive customized product news, updates and special invites.</p>
      <form action="">
        <input type="text" placeholder="Email" />
        <button>
          Subscribe <BsArrowRight />
        </button>
      </form>
    </section>
  );
}
