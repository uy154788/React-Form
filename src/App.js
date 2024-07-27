import { useState } from "react";
import "./App.css";

function App() {
  const [formData,setFormData]=useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", zip:"",
    comments:false, candidates:false, offers: false,
    pushNotification:""
  });
  function changeHandler(event){
    const{name,value,checked,type}=event.target;
    setFormData((prev)=>({...prev, [name]:type==="checkbox"? checked:value}))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of data");
    console.log(formData);

  }
  
  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
    <div className=" flex flex-col ">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName" className="text-sm font-medium leading-6 text-gray-900">First name</label><br/>
        <input type="text"
        name="firstName"
        id="firstName"
        placeholder="Upendra"
        value={formData.firstName}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
        <label htmlFor="lastName"className="text-sm font-medium leading-6 text-gray-900">Last name</label><br/>
        <input type="text"
        
        name="lastName"
        id="lastName"
        placeholder="Yadav"
        value={formData.lastName}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
        <label htmlFor="email"className="text-sm font-medium leading-6 text-gray-900">Email address</label><br/>
        <input type="email"
        name="email"
        id="email"
        placeholder="uy154788@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
        <label htmlFor="country"className="text-sm font-medium leading-6 text-gray-900">Country</label><br/>
        <select 
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm">
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br/>
        <label htmlFor="streetAddress"className="text-sm font-medium leading-6 text-gray-900">Street address</label><br/>
        <input type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="1234 main st"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
        <label htmlFor="city"className="text-sm font-medium leading-6 text-gray-900">City</label><br/>
        <input type="text"
        name="city"
        id="city"
        placeholder="Ghaziabad"
        value={formData.city}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
        <label htmlFor="state" className="text-sm font-medium leading-6 text-gray-900">State / Province</label><br/>
        <input type="text"
        name="state"
        id="state"
        placeholder="Uttar Pradesh"
        value={formData.state}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
        <label htmlFor="zip" className="text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label><br/>
        <input type="text"
        name="zip"
        id="zip"
        placeholder="201015"
        value={formData.zip}
        onChange={changeHandler}
        className="mt-2 ring-1 w-full rounded-md p-2 text-gray-900 placeholder:text-gray-400 shadow-sm"
        />
        <br/>
            
        <fieldset className="mt-4">
          <legend className="text-sm font-medium leading-6 text-gray-900">By Email</legend>
          <div className=" flex items-start gap-3 mt-4">
            <input
            id="comments"
            name="comments"
            type="checkbox" 
            className="mt-[1%] h-4 w-4 rounded"
            checked={formData.comments}
            onChange={changeHandler}
            />
            <div className=" flex items-start flex-col">
            <label htmlFor="comments" className="text-sm font-medium leading-6 text-gray-900">Comments</label>
            <p className="text-gray-500 text-sm">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className=" flex items-start gap-3 mt-4">
            <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
            className="mt-[1%] h-4 w-4 rounded"
            />
            <div>
            <label htmlFor="candidates"className="text-sm font-medium leading-6 text-gray-900">Candidates</label>
            <p className="text-gray-500 text-sm">Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className=" flex items-start gap-3 mt-4">
            <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}
            className="mt-[1%] h-4 w-4 rounded"
            />
            <div>
            <label htmlFor="offers" className="text-sm font-medium leading-6 text-gray-900">Offers</label>
            <p className="text-gray-500 text-sm">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        
        <fieldset className="mt-4">
          <legend className="text-sm font-medium leading-6 text-gray-900">Push Notifications</legend>
          <p className="text-gray-500 text-sm">These are delivered via SMS to your mobile phone.</p>
          <div className="flex flex-col mt-4 gap-2">
            <div className=" flex gap-3">
              <input
              type="radio"
              id="pushEverything"
              name="pushNotification"
              value="EveryThing"
              className="mt-[1%] h-4 w-4 rounded"
              onChange={changeHandler}
              />
              <label htmlFor="pushEverything" className="text-sm font-medium leading-6 text-gray-900">Everything</label><br/>
            </div>
            <div className="flex gap-3">
              <input
              type="radio"
              id="pushEmail"
              name="pushNotification"
              value="Same As Email"
              onChange={changeHandler}
              className="mt-[1%] h-4 w-4 rounded"
              />
              <label htmlFor="pushEmail" className="text-sm font-medium leading-6 text-gray-900">Same As Email</label><br/>
            </div>
            <div className="flex gap-3">
              <input
              type="radio"
              id="pushNothing"
              name="pushNotification"
              value="No Push Notification"
              onChange={changeHandler}
              className="mt-[1%] h-4 w-4 rounded"
              />
              <label htmlFor="pushNothing" className="text-sm font-medium leading-6 text-gray-900">No Push Notification</label><br/>
            </div>
          </div>
        </fieldset>
        <button className="my-3 bg-blue-500 font-bold text-white rounded-md py-2 px-4 hover:bg-blue-300 transition-all duration-200">Save</button>
      </form>
    </div>
    </div>
  );
}

export default App;
