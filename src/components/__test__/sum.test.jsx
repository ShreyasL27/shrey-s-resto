import { sum } from "../sum"

test("Sum function should calculate sum of two numbers", () => {
    const result = sum(4,3);

    // Assertion
    expect(result).toBe(7);
})