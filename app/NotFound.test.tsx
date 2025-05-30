import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("<NotFound />", () => {
  it("renders header", () => {
    render(<NotFound path="/abc" />);
    const heading = screen.getByRole("heading", {
      name: "Page Not Found",
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders paragraph", () => {
    render(<NotFound path="/abc" />);
    const paragraph = screen.getByText(/^The Page/);
    expect(paragraph).toHaveTextContent("The Page (/abc) Not Found.");
  });

  it("renders image", () => {
    render(<NotFound path="/abc" />);
    const image = screen.getByRole("img", { name: /404/i });
    expect(image).toHaveAttribute(
      "src",
      "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
    );
  });
});
