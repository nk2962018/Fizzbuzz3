import userEvent from "@testing-library/user-event";
import { Fizzbuzz } from "./Fizzbuzz";
import { render, screen, fireEvent } from "@testing-library/react";

test("it should show count when value is not divisible by 3 ", () => {
  render(<Fizzbuzz />);
  const incrementButton = screen.getByTestId("incrementCounter");
  fireEvent(incrementButton);
  const result = screen.getByTestId("result");
  expect(result).toBeVisible();
  expect(result).toHaveTextContent("2");
});

// describe("Fizzbuzz", () => {
//   it("should return the numbers passed in that are not divisible by 3 or 5", () => {
//     expect(Fizzbuzz(1)).toBe(1);
//     expect(Fizzbuzz(2)).toBe(2);
//     expect(Fizzbuzz(4)).toBe(4);
//     expect(Fizzbuzz(7)).toBe(7);
//     expect(Fizzbuzz(8)).toBe(8);
//     expect(Fizzbuzz(11)).toBe(11);
//   });

//   it("should return 'fizz' if the the number passed in is divisible by 3", () => {
//     expect(Fizzbuzz(3)).toBe("fizz");
//     expect(Fizzbuzz(6)).toBe("fizz");
//     expect(Fizzbuzz(9)).toBe("fizz");
//     expect(Fizzbuzz(12)).toBe("fizz");
//   });

//   it("should return 'buzz' if the the number passed in is divisible by 5", () => {
//     expect(Fizzbuzz(5)).toBe("buzz");
//     expect(Fizzbuzz(10)).toBe("buzz");
//     expect(Fizzbuzz(20)).toBe("buzz");
//   });

//   it("should return 'fizzbuzz' if the the number passed in is divisible by 3 and 5", () => {
//     expect(Fizzbuzz(15)).toBe("fizzbuzz");
//     expect(Fizzbuzz(30)).toBe("fizzbuzz");
//     expect(Fizzbuzz(45)).toBe("fizzbuzz");
//   });
// });

// // add negative test cases

// test('fiz test case', () =>{
//   expect(Fizzbuzz(3)).toBe('fizz');
// })
