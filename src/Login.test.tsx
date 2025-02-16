// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Login from "./Linkedin/Login";
// import { BrowserRouter } from "react-router-dom";

// describe("Login", () => {
//   test("login page rendering", () => {//problem
//     render(
//       <BrowserRouter>
//         <Login></Login>
//       </BrowserRouter>
//     );
//     expect(screen.getByText(/Email:/i)).toBeInTheDocument();

//   });

//   test("handle input changes check", () => {
//     render(
//       <BrowserRouter>
//         <Login></Login>
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByTestId("email-id") as HTMLInputElement;
//     fireEvent.change(emailInput, { target: { value: "Nathan" } });
//     expect(emailInput.value).toBe("Nathan");

//     const passwordInput = screen.getByTestId("password-id") as HTMLInputElement;
//     fireEvent.change(passwordInput, { target: { value: "nathan123456" } });
//     expect(passwordInput.value).toBe("nathan123456");
//   });

//   test("handle form submission with correct password", () => {
//     render(
//       <BrowserRouter>
//         <Login></Login>
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByTestId("email-id") as HTMLInputElement;
//     fireEvent.change(emailInput, { target: { value: "Nathan@gmail.com" } });
//     expect(emailInput.value).toBe("Nathan@gmail.com");

//     const passwordInput = screen.getByTestId("password-id") as HTMLInputElement;
//     fireEvent.change(passwordInput, { target: { value: "Nathan123456" } });
//     expect(passwordInput.value).toBe("Nathan123456");

//     fireEvent.click(screen.getByTestId("signin-btn"));

//     expect(screen.getByTestId("password-valid")).toBeInTheDocument();
//   });

// });
