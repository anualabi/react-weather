import { render, screen } from "@testing-library/react";

import Input, { InputProps } from "@/components/ui/input";

const mockProps = {
  type: "text",
  placeholder: "Enter city name",
  className: "",
};

const customRender = (props: InputProps) => {
  return render(<Input {...props} />);
};

describe("Input", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = customRender({ ...mockProps });
    expect(asFragment()).toMatchSnapshot();
  });

  it("shold render an input HTML element", () => {
    customRender({ ...mockProps });
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.tagName).toBe("INPUT");
  });

  it("should display the correct placeholder text", () => {
    render(<Input {...mockProps} />);
    const inputElement = screen.getByPlaceholderText(mockProps.placeholder);
    expect(inputElement).toBeInTheDocument();
  });
});
