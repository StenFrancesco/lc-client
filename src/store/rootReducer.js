import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import characters from "./characters/reducer"
import assigneditems from "./assigneditems/reducer"
import items from "./items/reducer"
import characterclasses from "./classes/reducer"

export default combineReducers({
  appState,
  user,
  characters,
  assigneditems,
  items,
  characterclasses
});
