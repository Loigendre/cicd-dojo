import { fireEvent, render } from "@testing-library/react";
import React from "react";
import CalculatorPage from "./Calculator";

test("reset button sets all counters back to 0", () => {
  const { getAllByText, getByText } = render(<CalculatorPage />);

  // Le premier "+" correspond au Sushi (45 kcal)
  fireEvent.click(getAllByText("+")[0]);
  expect(getByText("45 Kcal")).toBeInTheDocument();

  fireEvent.click(getByText("Reset"));
  expect(getByText("0 Kcal")).toBeInTheDocument();
});
