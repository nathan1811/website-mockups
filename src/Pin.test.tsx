import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pin from "./MuiComponents/Pin";
import { BrowserRouter } from "react-router-dom";

describe("Pin", () => {
  test("handle input changes check", () => {
    render(
      <BrowserRouter>
        <Pin></Pin>
      </BrowserRouter>
    );

    const pinInput = screen.getByTestId("pin-id") as HTMLInputElement;
    fireEvent.change(pinInput, { target: { value: "111111111" } });
    expect(pinInput.value).toBe("11111111");
  });

  //   test("handle form submission with correct Pin", () => {
  //     render(
  //       <BrowserRouter>
  //         <Pin></Pin>
  //       </BrowserRouter>
  //     );

  //     const pinInput = screen.getByTestId("pin-id") as HTMLInputElement;
  //     fireEvent.change(pinInput, { target: { value: "111111111" } });
  //     expect(pinInput.value).toBe("111111111");

  //     fireEvent.click(screen.getByTestId("confirm-btn"));
  //     fireEvent.click(screen.getByTestId("back-btn"));

  //     expect(screen.getByTestId("pin-valid")).toBeInTheDocument();
  //   });

  //   test("handle form back button", () => {
  //     render(
  //       <BrowserRouter>
  //         <Pin></Pin>
  //       </BrowserRouter>
  //     );

  //     const pinInput = screen.getByTestId("pin-id") as HTMLInputElement;
  //     fireEvent.change(pinInput, { target: { value: "11111111" } });
  //     expect(pinInput.value).toBe("11111111");

  //     fireEvent.click(screen.getByTestId("back-btn"));

  //     expect(pinInput.value).toBe("");
  //   });
});
