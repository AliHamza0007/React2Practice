import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
const Fetch = () => {
  const [ApiData, setApiData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    data
      ? (setApiData(data), toast.success("Get Data successfully From Fake Server"))
      : toast.error("Data Break");
  };
  const deleteData = async (id) => {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    data
      ? (getData(), toast.success(`${id} Deleted from Fake Server`))
      : toast.error(`Error in Deletion ${id}`);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div className="container py-5 text-light ">
        <table className="table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Body</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {ApiData &&
              ApiData?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <button
                      onClick={() => deleteData(item.id)}
                      className="btn btn-danger px-5"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Fetch;
