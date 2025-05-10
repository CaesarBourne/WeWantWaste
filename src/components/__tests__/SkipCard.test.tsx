import { render, screen } from "@testing-library/react";
import type { SkipOption } from "@/services/skipService";
import SkipCard from "../SkipCard";

const mockSkip: SkipOption = {
  id: 1,
  name: "8 Yard Skip",
  size: 8,
  hire_period_days: 14,
  price: 450,
  allowed_on_road: false,
  allows_heavy_waste: true,
};

describe("SkipCard", () => {
  it("shows 'Selected' button w`hen selected", () => {
    render(<SkipCard skip={mockSkip} isSelected={true} onSelect={() => {}} />);
    expect(screen.getByText("Selected")).toBeInTheDocument();
  });

  it("shows 'Select' button when not selected", () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />);
    expect(screen.getByText("Select")).toBeInTheDocument();
  });

  it("shows 'Not allowed on road' warning when allowed_on_road is false", () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />);
    expect(screen.getByText(/Not allowed on road/i)).toBeInTheDocument();
  });

  it("shows 'Heavy waste allowed' badge when allows_heavy_waste is true", () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />);
    expect(screen.getByText(/Heavy waste allowed/i)).toBeInTheDocument();
  });

  it("shows 'No heavy waste' badge when allows_heavy_waste is false", () => {
    const skipWithoutHeavy = { ...mockSkip, allows_heavy_waste: false };
    render(
      <SkipCard
        skip={skipWithoutHeavy}
        isSelected={false}
        onSelect={() => {}}
      />
    );
    expect(screen.getByText(/No heavy waste/i)).toBeInTheDocument();
  });
});
