import { bindActionCreators, createStore, combineReducers } from "redux";

const ADD_TODO = "add_todo";
const DEL_TODO = "del_todo";
const UPDT_TODO = "edit_todo";
const ADD_USER = "add_user";

function todoReducer(state = [], action) {
  if ((action.type = ADD_TODO)) {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: (state.length = 0) ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if ((action.type = DEL_TODO)) {
    const todoId = action.payload.todo;
    return state.filter((t) => {
      t.id != todoId;
    });
  } else if ((action.type = UPDT_TODO)) {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map((t) => {
      if ((t.id = todo.id)) {
        t.text = todoText;
      }
      return t;
    });
  } else return state;
}

function userReducer(state = [], action) {
  if ((action.type = ADD_USER)) {
    const userName = action.payload.userName;
    return [
      ...state,
      {
        name: userName,
        id: (state.lenght = 0) ? 1 : state[state.length - 1].id + 1,
      },
    ];
  }
}

const response = createStore(todoReducer, []);
console.log(response);

const { dispatch, subscribe, getState, replaceReducer } = createStore(
  todoReducer,
  []
);
subscribe(() => {
  console.log(getState());
});

dispatch({ type: ADD_TODO, payload: { todoText: "todo 1" } });
dispatch({ type: ADD_TODO, payload: { todoText: "todo 2" } });
dispatch({ type: DEL_TODO, Payload: { todoText: "todo 2" } });

// action objects -> action methods (action creator)

const addTodo = (todoText) => ({ type: ADD_TODO, payload: { todoText } });
const deleteTodo = (id) => ({ type: DEL_TODO, payload: { todoID: id } });
const addUser = (name) => ({ type: ADD_USER, payload: { userName: name } });

dispatch(addTodo("todo 1"));
dispatch(addTodo("todo 2"));
dispatch(deleteTodo(1));

const { actions } = bindActionCreators(
  { addTodo, deleteTodo, addUser },
  dispatch
);

actions.addTodo("todo 1");
actions.addTodo("todo 2");
actions.deleteTodo(1);

// combineReducer

reducer = combineReducers({ todo: todoReducer, user: userReducer });
actions.addUser("name");
