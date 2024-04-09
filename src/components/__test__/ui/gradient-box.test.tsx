import { render, screen } from "@testing-library/react";

import GradientBox, { GradientBoxProps } from "@/components/ui/gradient-box";

const mockProps = {
  children: <div>children</div>,
  className: "",
};

const customRender = (props: GradientBoxProps) => {
  return render(<GradientBox {...props} />);
};

describe("GradientBox", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = customRender({ ...mockProps });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render children", () => {
    customRender({ ...mockProps });
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
