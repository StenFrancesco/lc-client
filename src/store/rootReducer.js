import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import characters from "./characters/reducer"
import assigneditems from "./assigneditems/reducer"

export default combineReducers({
  appState,
  user,
  characters,
  assigneditems
});
