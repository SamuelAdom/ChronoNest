import React from 'react';

const Shipping = () => {
  return (
    <div className="mt-4 flex flex-col bg-gray-100  p-4 shadow-sm">
      <h2 className="text-black font-serif text-lg">SHIPPING ADDRESS</h2>
      <div className="mt-4">
        <label className="text-black font-mono" htmlFor="name">Name</label>
        <input placeholder="Your name" className="w-full bg-white  border-gray-300 text-black px-2 py-2 outline-0" type="text" />
      </div>
      <div className="mt-4">
        <label className="text-black font-mono" htmlFor="address">Address</label>
        <textarea placeholder="Your address" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-2 outline-0" id="address" defaultValue={""} />
      </div>
      <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
          <label className="text-black font-mono" htmlFor="city">City</label>
          <input placeholder="Your city" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-2 outline-0" id="city" type="text" />
        </div>
        <div className="flex-1">
          <label className="text-black font-mono" htmlFor="state">State</label>
          <input placeholder="Your state" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-2 outline-0" id="state" type="text" />
        </div>
      </div>
      <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
          <label className="text-black font-mono" htmlFor="zip">ZIP</label>
          <input placeholder="Your ZIP code" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-2 outline-0" id="zip" type="text" />
        </div>
        <div className="flex-1">
          <label className="text-black font-mono" htmlFor="country">Country</label>
          <select className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-2 outline-0" id="country">
            <option value>Select a country</option>
            <optgroup label="Africa">
              <option value="AF">Afghanistan</option>
              <option value="DZ">Algeria</option>
              <option value="AO">Angola</option>
              ...
              <option value="ZW">Zimbabwe</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="AM">Armenia</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BH">Bahrain</option>
              ...
              <option value="YE">Yemen</option>
            </optgroup>
            <optgroup label="South America">
              <option value="AR">Argentina</option>
              <option value="BO">Bolivia</option>
              <option value="BR">Brazil</option>
              ...
              <option value="VE">Venezuela</option>
            </optgroup>
            ...
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-white text-black rounded-md px-4 py-1 lg:hover:bg-gray-200 hover:text-gray-900 cursor-pointer" type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Shipping;
