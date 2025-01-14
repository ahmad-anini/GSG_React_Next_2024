import { useState, useEffect, useRef, useReducer } from "react";
import "./App.css";
import { IStudent } from "./types";
import Student from "./components/student/student.component";
import AddForm from "./components/add-form/add-form.component";
import useLocalStorage from "./hooks/local-storage.hook";
import reducer from "./State/reducer";
import { ActionType } from "./State/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    studentsList: [],
    totalAbsents: 0,
  });
  const lastStdRef = useRef<HTMLDivElement>(null);

  const { storedData } = useLocalStorage(state.studentsList, "students-list");

  useEffect(() => {
    dispatch({ type: ActionType.INIT_STUDENTS, payload: storedData || [] });
  }, [storedData]);

  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({ type: ActionType.ADD_STUDENT, payload: newStudent });
  };

  const removeFirst = () => {
    dispatch({ type: ActionType.REMOVE_FIRST_STUDENT });
  };

  const handleAbsentChange = (id: string, change: number) => {
    dispatch({ type: ActionType.UPDATE_ABSENTS, payload: { id, change } });
  };

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {state.totalAbsents}
        </b>
      </div>
      {state.studentsList.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </div>
  );
}

export default App;
