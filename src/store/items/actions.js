import { apiUrl } from "../../config/constants"
import axios from "axios"

export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS"

export const fetchItemsSuccess = (items) => (
  {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  }
)

export const fetchItems = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/items`)
      dispatch(fetchItemsSuccess(response.data.allItems))
    } catch (error) {
      console.error(error.message)
    }
  }
}