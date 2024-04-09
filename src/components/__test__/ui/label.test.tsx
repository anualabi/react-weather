import { render, screen } from "@testing-library/react";

import Label, { LabelProps } from "@/components/ui/label";

const mockProps = {
  children: "Test Label",
  className: "",
};

const customRender = (props: LabelProps) => {
  return render(<Label {...props} />);
};

describe("Label", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = customRender({ ...mockProps });
    expect(asFragment()).toMatchSnapshot();
  });

  it("shold render a label HTML element", () => {
    customRender({ ...mockProps });
    const labelElement = screen.getByText("Test Label");
    expect(labelElement.tagName).toBe("LABEL");
  });

  it("should render its children", () => {
    customRender({ ...mockProps });
    const labelElement = screen.getByText(mockProps.children);
    expect(labelElement).toBeInTheDocument();
  });
});
