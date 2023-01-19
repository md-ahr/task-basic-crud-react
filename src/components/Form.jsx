import axios from "axios";
import { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../context/context";
import SectorList from "./SectorList";

const Form = () => {
  const [sectorList, setSectorList] = useState([]);

  const { state, dispatch } = useContext(AppContext) || {};

  const [data, setData] = useState({
    name: '',
    sectors: [],
    isAgree: false,
  });

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://127.0.0.1:9000/sectors');
      setSectorList(res.data);
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.name && data.sectors.length && data.isAgree) {
        const res = await axios.post('http://127.0.0.1:9000/data', data);
        if (res.status === 201) {
          dispatch({ type: 'ADD_DATA', payload: res.data });
          toast.success("Data saved successfully!");
          setData({ ...data, name: '', sectors: [], isAgree: false });
        }
      } else {
        toast.error("Please select all the required fields!");
      }
    } catch (error) {
      toast.error("Data saved failed!");
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://127.0.0.1:9000/data/${state?.editId}`, data);
      if (res.status === 200) {
        dispatch({ type: 'UPDATE_DATA', payload: res.data });
        toast.success("Data updated successfully!");
        setData({ ...data, name: '', sectors: [], isAgree: false });
      }
    } catch (error) {
      toast.error("Data updated failed!");
    }
  }

  return (
    <div className="px-8 py-6 mx-auto w-full sm:w-[500px] bg-white shadow rounded">
      <p className="text-sm text-slate-600 font-medium">
        <span className="mr-1 text-red-500">*</span>
        Please enter your name and pick the Sectors you are currently involved in.
      </p>
      {/* Edit Form */}
      {state?.editId && (
        <form onSubmit={handleUpdate}>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="pb-2 text-sm font-medium block"
            >
              Name <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-3 py-2 w-full text-sm border border-slate-400 rounded"
              defaultValue={state?.data[state?.editId - 1]?.name}
              onChange={(e) => setData({...data, name: e.target.value})}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="sectors"
              className="pb-2 text-sm font-medium block"
            >
              Sectors <span className="text-red-500 text-sm">*</span>
            </label>
            <select
              name="sectors"
              id="sectors"
              size={10}
              className="px-3 py-2 w-full text-sm border border-slate-400 rounded"
              multiple
              defaultValue={state?.data[state?.editId - 1]?.sectors}
              onChange={(e) => setData({...data, sectors: Array.from(e.target.selectedOptions, option => option.value)})}
            >
              <SectorList sectorList={sectorList} />
            </select>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="align-middle"
              checked
              onChange={(e) => setData({...data, isAgree: e.target.checked})}
            />
            <label htmlFor="terms" className="pl-2 text-sm">
              Agree to terms <span className="text-red-500 text-sm">*</span>
            </label>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-6 py-2 text-sm text-white bg-green-600 font-medium rounded hover:bg-green-500 transition duration-500"
            >
              Update
            </button>
          </div>
        </form>
      )}
      {/* Normal Form */}
      {!state?.editId && (
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label
              htmlFor="name"
              className="pb-2 text-sm font-medium block"
            >
              Name <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-3 py-2 w-full text-sm border border-slate-400 rounded"
              defaultValue={data?.name}
              onChange={(e) => setData({...data, name: e.target.value})}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="sectors"
              className="pb-2 text-sm font-medium block"
            >
              Sectors <span className="text-red-500 text-sm">*</span>
            </label>
            <select
              name="sectors"
              id="sectors"
              size={10}
              className="px-3 py-2 w-full text-sm border border-slate-400 rounded"
              multiple
              defaultValue={data?.sectors}
              onChange={(e) => setData({...data, sectors: Array.from(e.target.selectedOptions, option => option.value)})}
            >
              <SectorList sectorList={sectorList} />
            </select>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="align-middle"
              checked={data?.isAgree}
              onChange={(e) => setData({...data, isAgree: e.target.checked})}
            />
            <label htmlFor="terms" className="pl-2 text-sm">
              Agree to terms <span className="text-red-500 text-sm">*</span>
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
      )}
    </div>
  );
};

export default Form;
