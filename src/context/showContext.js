import createDataContext from "./createDataContext";

const showReducer = (state, action) => {
  switch (action.type) {
    case "home":
      return { ...state, show: "home" };
    case "about":
      return { ...state, show: "about" };
    case "contact":
      return { ...state, show: "contact" };
    case "projects":
      return { ...state, show: "projects" };
    default:
      return state;
  }
};

const home = (dispatch) => () => {
  dispatch({ type: "home" });
};

const about = (dispatch) => () => {
  dispatch({ type: "about" });
};

const contact = (dispatch) => () => {
  dispatch({ type: "contact" });
};

const projects = (dispatch) => () => {
  dispatch({ type: "projects" });
};

export const { Context, Provider } = createDataContext(
  showReducer,
  { home, about, contact, projects },
  { show: "home" }
);
