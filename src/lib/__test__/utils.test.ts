import { formatDate, getDayOfWeek } from "@/lib/utils";

describe("getDayOfWeek", () => {
  it("should return the correct day of the week", () => {
    const date = new Date("2023-04-05"); // Wednesday
    const result = getDayOfWeek(date);
    expect(result).toBe("Wednesday");
  });
});

describe("formatDate", () => {
  it('should return the formatted date string "EEE dd"', () => {
    const date = new Date("2023-04-29"); // Saturday
    const result = formatDate(date);
    expect(result).toBe("Sat 29");
  });
});
