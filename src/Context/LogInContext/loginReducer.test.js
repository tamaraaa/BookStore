import reducer from "./LoginReducer";
import { userState } from "./LoginContext";
import { LOGIN } from "./LoginReducer";

describe("login reducer", () => {
  it("should return inital state", () => {
    expect(reducer(userState, {})).toEqual({
      hasError: false,
      activUser: null,
      isLogedIn: false,
      users: [
        {
          name: "Tamara",
          email: "tamara.bla@gmail.com",
          password: "blabla1",
          id: 1
        },
        {
          name: "Ana",
          email: "ana.bla@gmail.com",
          password: "myPassword1",
          id: 2
        }
      ]
    });
  });
});
