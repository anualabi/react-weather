import { render, screen } from "@testing-library/react";

import Navbar from "@/components/navbar";

describe("Navbar", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render an HTML nav element", () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement.tagName).toBe("NAV");
  });

  it("should contain the Logo component's content", () => {
    render(<Navbar />);
    const logoText = screen.getByText("React Weather");
    expect(logoText).toBeInTheDocument();
  });
});
