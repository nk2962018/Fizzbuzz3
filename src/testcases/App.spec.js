import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("The App works fine when", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should have the app loaded", () => {
    const appComponent = screen.getByTestId("parent");
    expect(appComponent).toBeInTheDocument();
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


