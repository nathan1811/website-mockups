// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import SignUp from "./Linkedin/SignUp";
// import { BrowserRouter } from "react-router-dom";

// describe("SignUp", () => {
//   test("login page rendering", () => {//problem
//     render(
//       <BrowserRouter>
//         <SignUp></SignUp>
//       </BrowserRouter>
//     );
//     expect(screen.getByText(/Email:/i)).toBeInTheDocument();

//   });

//   test("handle input changes check", () => {
//     render(
//       <BrowserRouter>
//         <SignUp></SignUp>
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
//         <SignUp></SignUp>
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByTestId("email-id") as HTMLInputElement;
//     fireEvent.change(emailInput, { target: { value: "Nathan@gmail.com" } });
//     expect(emailInput.value).toBe("Nathan@gmail.com");

//     const passwordInput = screen.getByTestId("password-id") as HTMLInputElement;
//     fireEvent.change(passwordInput, { target: { value: "Nathan123456" } });
//     expect(passwordInput.value).toBe("Nathan123456");

//     expect(screen.getByTestId("password-valid")).toBeInTheDocument();//problem
//   });

// });
