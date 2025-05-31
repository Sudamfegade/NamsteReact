import { sum } from "../sum";

test("sum fun should cal sum of 2 num", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
