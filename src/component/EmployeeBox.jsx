import styles from "./empBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EmployeeBox({ item, employees, setEmployees }) {
  console.log(employees[0].empName);

  const empDeleteHandler = (item) => {
    console.log("clicked...", item);
    setEmployees(employees.filter((employee) => employee !== item));
  };

  return (
    <div>
      {/* <div className={styles.employeeBox}>
        <div className={styles.profileContainer}>
          <div className={styles.imgContainer}>
            <img src={profileImg} alt="" />
          </div>
          <div className={styles.empDetailContainer}>
            <div className={styles.idBox}>
              {employees.map((item) => (
                <h3 key={item.empName}>{item.empName}</h3>
              ))}
            </div>
            <div className={styles.nameBox}>
              {employees.map((item) => (
                <h3 key={item.empID}>{item.empID}</h3>
              ))}
            </div>
            <div className={styles.designationBox}>
              {employees.map((item) => (
                <h3 key={item.empDesignation}>{item.empDesignation}</h3>
              ))}
            </div>
            <div className={styles.projectsBox}>
              {employees.map((item) => (
                <h3 key={item.empProName}>{item.empProName}</h3>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.employeeBox}>
        <div className={styles.actionBox}>
          <span onClick={() => empDeleteHandler(item)}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.imgContainer}>
            <img src={item.empImg} alt="" />
            <h3 key={item.empID}>{item.empName}</h3>
          </div>
          <div className={styles.empDetailContainer}>
            <div className={`${styles.idBox} ${styles.leftColMeta}`}>
              <div className={styles.titleName}>EP ID : </div>
              {<h3 key={item.empName}>{item.empID}</h3>}
            </div>
            {/* <div className={`${styles.nameBox} ${styles.leftColMeta}`}>
              <div className={styles.titleName}>Employee Name : </div>
              <h3 key={item.empID}>{item.empID}</h3>
            </div> */}
            <div className={`${styles.designationBox} ${styles.leftColMeta}`}>
              <div className={styles.titleName}>EP Designation : </div>
              <h3 key={item.empDesignation}>{item.empDesignation}</h3>
            </div>
            <div className={`${styles.projectsBox} ${styles.leftColMeta}`}>
              <div className={styles.titleName}>EP Projects : </div>
              <h3 key={item.empProName}>{item.empProName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
