import SectionProvider from "../providers/SectionProvider";

const Contact: React.FC = () => {
  return (
    <SectionProvider>
      <form id="form" className="flex  flex-col [&>label]:my-4">
        <h1 className="text-3xl">Get in Touch</h1>
        <label htmlFor="Name">
          Name
          <input type="text" placeholder="Your Name..." />
        </label>
        <label htmlFor="Location">
          Location
          <input type="text" placeholder="Your Location..." />
        </label>
        <label htmlFor="Email">
          Email
          <input type="text" placeholder="Your Email..." />
        </label>
        <label htmlFor="Message">
          Message
          <textarea
            name="message"
            className="h-32"
            placeholder="message here..."
          ></textarea>
        </label>
        <button className="rounded-full bg-yellow-400 px-5 py-2 font-dis">
          Send
        </button>
      </form>
    </SectionProvider>
  );
};

export default Contact;
