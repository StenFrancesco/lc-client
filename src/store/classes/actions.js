import { apiUrl } from "../../config/constants"
import axios from "axios"

export const FETCH_CHARACTERCLASSES_SUCCESS = "FETCH_CHARACTERCLASSES_SUCCESS"

export const fetchCCSuccess = (characterclasses) => (
  {
    type: FETCH_CHARACTERCLASSES_SUCCESS,
    payload: characterclasses
  }
)

export const fetchCC = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/characterclasses`)
      console.log("cclasses-response is", response)
      dispatch(fetchCCSuccess(response.data.CharacterClasses))
    } catch (error) {
      console.error(error.message)
    }
  }
}