
const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo")) || {}
const getUserInfo = () => {
 let userInfo = {}
 Object.keys(userInfoLocalStorage).forEach((key) => {
   if(userInfo[key] == undefined && userInfoLocalStorage[key] != null) userInfo[key] = userInfoLocalStorage[key]
 })
 return userInfo
}
const state = {
    AppActiveUser: getUserInfo(),
    userDetails:  null,
}
export default state
