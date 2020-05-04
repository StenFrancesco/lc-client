import { apiUrl } from "../../config/constants"
import axios from "axios"

export const FETCH_ASSIGNEDITEMS_SUCCESS = "FETCH_ASSIGNEDITEMS_SUCCESS"

export const fetchAssignedItemsSuccess = (assigneditems) => (
  {
    type: FETCH_ASSIGNEDITEMS_SUCCESS,
    payload: assigneditems
  }
)

export const fetchAssignedItems = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/assigneditems`)
      console.log(response)
      dispatch(fetchAssignedItemsSuccess(response.data.assigned))
    } catch (error) {
      console.error(error.message)
    }
  }
}