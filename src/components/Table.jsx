import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/context";

const Table = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://127.0.0.1:9000/data');
      dispatch({ type: 'GET_DATA', payload: res.data });
    }
    !state?.data?.isEdit && getData();
  }, []);

  const handleEdit = async (e, id) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_DATA', payload: id });
  };

  return (
    <div className="mt-8 mx-auto w-full sm:w-[600px] overflow-x-auto shadow-md sm:rounded-lg">
      {state && state.data && state.data.length > 0 && (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Sectors
              </th> */}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {state.data && state.data.map((item) => (
              <tr key={item.id} className="bg-white border-b">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.name}</td>
                {/* <td className="px-6 py-4">{item.sectors.join(', ')}</td> */}
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                    onClick={(e) => handleEdit(e, item.id)}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
