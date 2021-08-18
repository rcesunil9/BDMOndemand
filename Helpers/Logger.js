import { EnviornmentTypes } from "../config/AppConfig";
const getFunctionCallerName = () => {
  try {
    throw new Error();
  } catch (e) {
    try {
      return e.stack.split("at ")[3].split(" ")[0];
    } catch (e) {
      return "";
    }
  }
};
export function logger() {
  const caller = getFunctionCallerName();
  if (process.env.NODE_ENV === EnviornmentTypes.DEV) {
    for (let index = 0; index < arguments.length; index++) {
      const data = arguments[index];
      console.log("====================================");
      console.log(data, `called by ${caller}`);
      console.log("====================================");
    }
  }
}
