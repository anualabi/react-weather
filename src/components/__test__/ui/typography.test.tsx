import { render, screen } from "@testing-library/react";

import { H2 } from "@/components/ui/typography";

const mockProps = {
  children: "Test Typography",
  className: "",
};

describe("H2", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = render(<H2 {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render an h2 HTML element", () => {
    render(<H2 {...mockProps} />);
    const h2Element = screen.getByText("Test Typography");
    expect(h2Element.tagName).toBe("H2");
  });

  it("should render its children", () => {
    render(<H2 {...mockProps} />);
    const h2Element = screen.getByText(mockProps.children);
    expect(h2Element).toBeInTheDocument();
  });
});
