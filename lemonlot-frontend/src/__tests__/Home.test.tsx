import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Component", () => {
  test("renders the heading", () => {
    render(<Home />);
    const headingElement = screen.getByText(/hello world/i);
    expect(headingElement).toBeInTheDocument();
  });
});
