import { useState } from "react";
import styles from "./empForm.module.css";

export default function EmployeeForm({ employees, setEmployees }) {
  const [emp, setEmp] = useState({
    empName: "",
    empID: "",
    empDesignation: "",
    empImg: "",
    empProName: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setEmployees([...employees, emp]);
    setEmp({
      empName: "",
      empID: "",
      empDesignation: "",
      empImg: "",
      empProName: "",
    });
  };

  return (
    <div>
      {/* {emp.empID} - {emp.empName} - {emp.empDesignation} - {emp.empImg} -{" "}
      {emp.empProName} */}
      {emp.empNum}
      <div className={styles.backdrop}></div>
      <div className={styles.formContainer}>
        <form action="" onSubmit={submitHandler}>
          <div className={styles.empTitle}>
            <h3>Please Enter Employee Details</h3>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="">Emploayee ID : </label>
            <input
              onChange={(e) => setEmp({ ...emp, empID: e.target.value })}
              type="text"
              name=""
              id=""
              value={emp.empID}
              placeholder="Enter Employee ID..."
              required
            />
            <label htmlFor="">Full Name : </label>
            <input
              onChange={(e) => setEmp({ ...emp, empName: e.target.value })}
              type="text"
              name=""
              id=""
              value={emp.empName}
              placeholder="Full Name..."
              required
            />
            <label htmlFor="">Designation : </label>
            <input
              onChange={(e) =>
                setEmp({ ...emp, empDesignation: e.target.value })
              }
              type="text"
              name=""
              id=""
              value={emp.empDesignation}
              placeholder="Enter Designation..."
              required
            />
            <label htmlFor="">Emplaoyee Profile Picture : </label>
            <input
              onChange={(e) => setEmp({ ...emp, empImg: e.target.value })}
              type="text"
              name=""
              id=""
              value={emp.empImg}
              placeholder="Enter Profile URL..."
              required
            />
            {/* <input
              onChange={(e) => setEmp({ ...emp, empImg: e.target.value })}
              type="file"
            /> */}
            <label htmlFor="">Projects Name : </label>
            <textarea
              onChange={(e) => setEmp({ ...emp, empProName: e.target.value })}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Project Name..."
              value={emp.empProName}
            ></textarea>
            <button className={styles.btnSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
