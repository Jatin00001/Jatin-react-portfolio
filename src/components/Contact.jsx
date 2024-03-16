import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 text-gray-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg flex flex-col justify-center p-4 mx-auto w-full h-full ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact me
          </h1>
          <h1 className="py-6 italic">Submit the form below to get in touch with me.</h1>

          <div>
            {/* <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST"> */}
            <form action="https://getform.io/f/panrvpxa" method="POST" >
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-white placeholder-gray-200 bg-transparent border-2 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-white placeholder-gray-200 bg-transparent border-2 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <textarea
                  placeholder="Your message"
                  rows={6}
                  name="message"
                  className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-white placeholder-gray-200 bg-transparent border-2 rounded shadow outline-none"
                  required
                />
              </div>
              <div className="pt-0 mb-3">
                <button
                  className="active:bg-blue-600 hover:shadow-lg hover:scale-110 duration-300 focus:outline-none px-6 py-3 my-8 flex items-center  mx-auto text-sm font-bold text-white capitalize  bg-gradient-to-r from-cyan-500 to-blue-500 rounded shadow outline-none "
                  type="submit"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
