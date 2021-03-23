const { LongPressGestureHandler } = require("react-native-gesture-handler");

const user = {
  email: "app@gmail.com",
  password: "12345",
};
const validate = (loginInfo) => {
  if (user.email === loginInfo.email && user.password === loginInfo.password)
    return true;
  else return false;
};
export default {
  validate,
};
