import { render, screen } from "@testing-library/react";
import App from "./components/App/App";

describe("The App works fine when", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should have the app loaded", () => {
    const header = screen.getByTestId("parent");
    expect(header).toBeInTheDocument();
  });

  it("should have the header loaded", async () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should have the proper header name", async () => {
    const header = screen.getByTestId("header");
    expect(header).toHaveTextContent("The Fizzbuzz Program");
  });

  it("should have the fizzBuzz loaded", async () => {
    const fizzBuzz = screen.getByTestId("fizzBuzz");
    expect(fizzBuzz).toBeInTheDocument();
  });
});

/*
1. Write the test case
2. Write the implementation to pass the test case
3. Commit your changes (feat: add ) Only present tense
4. Do the refacotring if any
5. Commit the changes (refactor: update ...) Only present tense
6. Repeat the step from 1

*/
