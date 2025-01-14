import { IStudent } from "../types";

interface IState {
  studentsList: IStudent[];
  totalAbsents: number;
}

export enum ActionType {
  INIT_STUDENTS = "INIT_STUDENTS",
  ADD_STUDENT = "ADD_STUDENT",
  REMOVE_FIRST_STUDENT = "REMOVE_FIRST_STUDENT",
  UPDATE_ABSENTS = "UPDATE_ABSENTS",
}

type Action =
  | { type: ActionType.INIT_STUDENTS; payload: IStudent[] }
  | { type: ActionType.ADD_STUDENT; payload: IStudent }
  | { type: ActionType.REMOVE_FIRST_STUDENT }
  | {
      type: ActionType.UPDATE_ABSENTS;
      payload: { id: string; change: number };
    };

const calculateTotalAbsents = (students: IStudent[]): number =>
  students.reduce((sum, student) => sum + student.absents, 0);

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionType.INIT_STUDENTS: {
      const totalAbsents = calculateTotalAbsents(action.payload);
      return {
        ...state,
        studentsList: action.payload,
        totalAbsents,
      };
    }
    case ActionType.ADD_STUDENT: {
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };
    }
    case ActionType.REMOVE_FIRST_STUDENT: {
      return {
        ...state,
        studentsList: state.studentsList.slice(1),
      };
    }
    case ActionType.UPDATE_ABSENTS: {
      const { id, change } = action.payload;
      const updatedList = state.studentsList.map((student) =>
        student.id === id
          ? { ...student, absents: student.absents + change }
          : student
      );
      const totalAbsents = calculateTotalAbsents(updatedList);
      return {
        ...state,
        studentsList: updatedList,
        totalAbsents,
      };
    }
    default:
      return state;
  }
};

export default reducer;
