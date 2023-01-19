import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://127.0.0.1:9000/data');
      setFormData(res.data);
    }
    getData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="mt-8 mx-auto w-full sm:w-[600px] overflow-x-auto shadow-md sm:rounded-lg">
      {formData && formData.length > 0 &&
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Sectors
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {formData && formData.map((item) => (
            <tr key={item.id} className="bg-white border-b">
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.sectors.join(', ')}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleEdit}
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default Table;
