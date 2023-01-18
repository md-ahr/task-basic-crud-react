import React from "react";

const Form = () => {
  return (
    <div className="px-8 py-6 mx-auto w-full sm:w-96 bg-white shadow rounded">
      <p className="text-sm text-slate-600 font-medium">
        <span className="mr-1 text-red-500">*</span>
        Please enter your name and pick the Sectors you are currently involved in.
      </p>
      <form>
        <div className="mt-4">
          <label
            htmlFor="name"
            className="pb-2 text-sm font-medium block"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="px-3 py-2 w-full text-sm border border-slate-400 rounded"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="sectors"
            className="pb-2 text-sm font-medium block"
          >
            Sectors
          </label>
          <select
            name="sectors"
            id="sectors"
            className="px-3 py-2 w-full text-sm border border-slate-400 rounded"
            multiple
          >
            <option value="">Select your sectors</option>
            <option value="">Construction materials</option>
            <option value="">Construction materials</option>
            <option value="">Construction materials</option>
            <option value="">Construction materials</option>
            <option value="">Construction materials</option>
          </select>
        </div>
        <div className="mt-4">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="align-middle"
          />
          <label htmlFor="terms" className="pl-2 text-sm">
            Agree to terms
          </label>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-6 py-2 text-sm text-white bg-green-600 font-medium rounded hover:bg-green-500 transition duration-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
