import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

export default function EmployeeDetail() {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <EmployeeForm employees={employees} setEmployees={setEmployees} />
      <EmployeeList employees={employees} setEmployees={setEmployees} />
    </div>
  );
}
