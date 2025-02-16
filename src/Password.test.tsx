// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Password from "./MuiComponents/Password";
// import { BrowserRouter } from "react-router-dom";

// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   const password =

//     render(
//       <BrowserRouter>
//         <Password></Password>
//       </BrowserRouter>
//     );
//   expect(password).toMatchSnapshot();
// });

// describe("Password", () => {
//   test("login page rendering", () => {
//     render(
//       <BrowserRouter>
//         <Password></Password>
//       </BrowserRouter>
//     );
//     expect(screen.getByText(/Email:/i)).toBeInTheDocument();

//   });

//   test("handle input changes check", () => {
//     render(
//       <BrowserRouter>
//         <Password></Password>
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
//         <Password></Password>
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByTestId("email-id") as HTMLInputElement;
//     fireEvent.change(emailInput, { target: { value: "Nathan@gmail.com" } });
//     expect(emailInput.value).toBe("Nathan@gmail.com");

//     const passwordInput = screen.getByTestId("password-id") as HTMLInputElement;
//     fireEvent.change(passwordInput, { target: { value: "Nathan123456" } });
//     expect(passwordInput.value).toBe("Nathan123456");

//     fireEvent.click(screen.getByTestId("login-btn"));

//     expect(screen.getByTestId("password-valid")).toBeInTheDocument();
//   });

//   test("handle form reset button", () => {
//     render(
//       <BrowserRouter>
//         <Password></Password>
//       </BrowserRouter>
//     );

//     const emailInput = screen.getByTestId("email-id") as HTMLInputElement;
//     fireEvent.change(emailInput, { target: { value: "Nathan@gmail.com" } });
//     expect(emailInput.value).toBe("Nathan@gmail.com");

//     const passwordInput = screen.getByTestId("password-id") as HTMLInputElement;
//     fireEvent.change(passwordInput, { target: { value: "Nathan123456" } });
//     expect(passwordInput.value).toBe("Nathan123456");

//     fireEvent.click(screen.getByTestId("reset-btn"));
//     expect(emailInput.value).toBe("");
//     expect(passwordInput.value).toBe("");
//   });
// });
