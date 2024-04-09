import { render, screen } from "@testing-library/react";

import Container, { ContainerProps } from "@/components/ui/container";

const mockProps = {
  children: <div>children</div>,
  className: "",
};

const customRender = (props: ContainerProps) => {
  return render(<Container {...props} />);
};

describe("Container", () => {
  it("should render (snapshot)", () => {
    const { asFragment } = customRender({ ...mockProps });
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render children", () => {
    customRender({ ...mockProps });
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
