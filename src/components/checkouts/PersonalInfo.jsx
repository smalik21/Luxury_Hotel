const PersonalInfo = () => {
    return (
      <section className="p-4 border border-gray-300 rounded-lg mb-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded"/>
        </div>
      </section>
    );
  };
  
  export default PersonalInfo;
  