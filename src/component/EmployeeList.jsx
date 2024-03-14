import EmployeeBox from "./EmployeeBox";

export default function EmployeeList({ employees, setEmployees }) {
  return (
    <div>
      <div className="employeeListContainer">
        {employees.map((item) => (
          <EmployeeBox
            key={item.name}
            item={item}
            employees={employees}
            setEmployees={setEmployees}
          />
        ))}
      </div>
    </div>
  );
}
