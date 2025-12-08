const Contact = () => {
    return (
        <div className="contact-container" style={{ padding: "40px", margin: "70px" }}>
            <h1 className='text-white'>Contact Me</h1>
            <p className='text-white'>
                Feel free to reach out via email, phone, or connect on social platforms.
            </p>

            <form className="contact-form " action="https://formspree.io/f/xwpgqzov" method="POST" style={{
                maxWidth: "500px",
                width: "100%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(255,255,255,0.1)",
                padding: "20px",
                borderRadius: "10px"
            }}>
                {/* Name */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        className="form-control"
                    />
                </div>

                {/* Email */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <input
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                        className="form-control"
                    />
                </div>

                {/* Message */}
                <div className="form-group" style={{ marginBottom: "15px" }}>
                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Write your message..."
                        className="form-control"
                    ></textarea>
                </div>

                {/* Button */}
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
