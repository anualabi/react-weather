import { render, screen } from "@testing-library/react";

import Skeleton from "@/components/ui/skeleton";

describe("Skeleton", () => {
  const baseClasses = "animate-pulse rounded-md bg-zinc-900/10";

  it("should render correctly", () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toHaveClass(baseClasses);
  });

  it("should render with additional classes", () => {
    const additionalClasses = "text-white";
    render(<Skeleton className="text-white" data-testid="skeleton" />);

    expect(screen.getByTestId("skeleton")).toHaveClass(
      `${baseClasses} ${additionalClasses}`
    );
  });
});
