import Cookies from 'universal-cookie';
import {createSlice} from '@reduxjs/toolkit'

const cookies = new Cookies();
let initialState = {
  isLogin: cookies.get('jwt') && typeof(cookies.get('jwt'))  === 'undefined' ? true : false,
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true
    },
    logout(state, action) {
        state.isLogin = false
    },
  }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer