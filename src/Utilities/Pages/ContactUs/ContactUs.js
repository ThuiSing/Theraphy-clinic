import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto min-h-screen py-16 px-3 md:px-0">
      <div className="md:w-1/2 mx-auto">
        <div className="text-center mt-10 mb-4">
          <h3 className="text-4xl font-bold inline-block  border-b-2 border-blue-900">
            Contact Us
          </h3>
        </div>
        <form className="space-y-5 mt-10" action="">
          <input
            className="w-full border p-3 rounded "
            type="text"
            placeholder="Type Your Name"
            required
          />
          <input
            className="w-full border p-3 rounded "
            type="email"
            placeholder="Type Your Email"
            required
          />
          <textarea
            className="w-full border p-3 rounded "
            col="30"
            rows="10"
            placeholder="message...."
          />
          <div className="text-center">
            <button type="submit" className="bg-btn p-3">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
