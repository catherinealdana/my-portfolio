import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
        If you're curious about how I can bring some magic to your team, 
        feel free to drop me an email or give me a call. I'd love to chat about it!
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> catherinealdana16@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +1 404 409 7960
        </p>
      </div>
    </section>
  );
};

export default Contact;