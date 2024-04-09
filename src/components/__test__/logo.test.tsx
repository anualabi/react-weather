import { render, screen } from "@testing-library/react";

import Logo from "@/components/logo";

describe("Logo", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a level 2 heading", () => {
    render(<Logo />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("should display the correct text content in the heading", () => {
    render(<Logo />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("React Weather");
  });

  it("should have a link pointing to the homepage", () => {
    render(<Logo />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
