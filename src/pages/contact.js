import React from "react"

const ContactPage = () => {
  return (
    <>
      <h1>Hi from the Contact</h1>
      <p>Welcome to Contact</p>

      <div>
        <div className="col-md-8 mt-5">
          <h3>Getform.io Gatsby Form Example</h3>
          <form
            method="post"
            action="https://test-delta-five.vercel.app/contact"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value="tescior@gmail.com"
            />
            <input
              type="text"
              name="subject"
              placeholder="Your Name"
              value="tesst"
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              value="asdasdasdasdasd"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactPage
