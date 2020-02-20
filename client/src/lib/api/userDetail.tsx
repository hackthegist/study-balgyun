import apiClient from './client'
import setAuthToken from '../../utils/setAuthToken'
// import { userInfo } from '../../components/userDetail/UserInfoTypes'

export const myInfo = () => {
  if (sessionStorage.token) {
    // alert(sessionStorage.token)
    setAuthToken(sessionStorage.token)
  }
  return apiClient.get('/user/myPage')
}

export const upload = (formdata : FormData) => {
  if (sessionStorage.token) {
    // alert(sessionStorage.token)
    setAuthToken(sessionStorage.token)
  }
  return apiClient.post('/user/profileUpload', formdata)
}

export const userInfo = (userId : number) => {
  if (sessionStorage.token) {
    //alert(sessionStorage.token)
    setAuthToken(sessionStorage.token)
  }
  return apiClient.get(`/user/userInfo/${userId}`)
}
