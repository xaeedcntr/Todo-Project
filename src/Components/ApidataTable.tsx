import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../Styles/Table.css";
import UserData from "./UserData";
import axios from "axios"; // Import axios

const API = "https://jsonplaceholder.typicode.com/users";

const ApidataTable = () => {
  const [tableData, setTableData] = useState([]);

  const fetchUsers = async (url: any) => {
    try {
      const res = await axios.get(url); // Use axios.get instead of fetch
      const data = res.data;
      if (data.length > 0) {
        setTableData(data);
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <table style={{ backgroundColor: "black", color: "aqua" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={tableData} />
        </tbody>
      </table>
    </>
  );
};

export default ApidataTable;
