import { apiUrl } from "../../config/constants"
import axios from "axios"

export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"

export const fetchCharactersSuccess = (characters) => (
  {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
  }
)

export const fetchCharacters = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/chars`)
      console.log(response)
      dispatch(fetchCharactersSuccess(response.data.allCharacters))
    } catch (error) {
      console.error(error.message)
    }
  }
}