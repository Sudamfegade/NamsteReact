const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4 text-center text-4xl">
        Contact us Page.
      </h1>
      <form className="flex m-auto items-center">
        <input
          type="text"
          className="border border-black p-4 m-4"
          placeholder="name"
        ></input>
        <textarea
          type="text"
          className="border border-black p-4 m-4"
          placeholder="message"
        ></textarea>
        <button className="border border-blue-300 p-4 m-4 cursor-pointer bg-blue-300 rounded-3xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
