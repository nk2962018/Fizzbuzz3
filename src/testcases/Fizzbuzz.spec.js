import Fizzbuzz from "../components/Fizzbuzz";
import { render, screen, fireEvent } from "@testing-library/react";


describe("The Fizzbuzz component works fine when", () => {
    beforeEach(() => {
      render(<Fizzbuzz/>);
    });

    it("should have the fizzbuzz loaded", () => {
      const fizzBuzz = screen.getByTestId("fizzBuzz");
      expect(fizzBuzz).toBeInTheDocument();
    });


    it("should have the increment button loaded", async () => {
      const incrementButton = screen.getByTestId("Increment");
      expect(incrementButton).toBeInTheDocument();
    });

    test("should display Increment button text", () => {
      const incrementButton = screen.getByTestId("Increment");
      expect(incrementButton).toHaveTextContent("Increment");
    })

    it("it should show count result when increment button is clicked ", () => {
        const incrementButton = screen.getByTestId("Increment");
         fireEvent.click(incrementButton);
        const result = screen.getByTestId("result");
        expect(result).toBeVisible();
    });
    test("Increment button is clicked and the value increments by 1  ", () => {
      const incrementButton = screen.getByTestId("Increment");
       fireEvent.click(incrementButton);
      const result = screen.getByTestId("result");
      expect(result).toHaveTextContent("2");
    });

    test("Increment button is clicked twice and the value  fizz is displayed  ", () => {
      const incrementButton = screen.getByTestId("Increment");
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      const result = screen.getByTestId("result");
      expect(result).toHaveTextContent("Fizz");
    });

    it("should have the decrement button loaded", () => {
      const decrementButton = screen.getByTestId("Decrement");
      expect(decrementButton).toBeInTheDocument();
    });

    test("should display Decrement button text", () => {
      const decrementButton = screen.getByTestId("Decrement");
      expect(decrementButton).toHaveTextContent("Decrement");
    })


    it("it should show count result when decrement button is clicked ", () => {
      const decrementButton = screen.getByTestId("Decrement");
       fireEvent.click(decrementButton);
      const result = screen.getByTestId("result");
      expect(result).toBeVisible();
    });

    test("Decrement button is clicked and the value remains 1  ", () => {
      const decrementButton = screen.getByTestId("Decrement");
       fireEvent.click(decrementButton);
      const result = screen.getByTestId("result");
      expect(result).toHaveTextContent("1");
    });

    it("should have the count result loaded", () => {
      const countResult = screen.getByTestId("result");
      expect(countResult).toBeInTheDocument();
    });

});

