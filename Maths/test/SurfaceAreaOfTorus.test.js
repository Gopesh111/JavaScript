import surfaceAreaOfTorus from "../SurfaceAreaOfTorus";

describe("Surface Area of Torus", () => {
  test("calculates surface area correctly for valid inputs", () => {
    expect(surfaceAreaOfTorus(3, 1)).toBeCloseTo(59.21762640653615, 10);
    expect(surfaceAreaOfTorus(5, 2)).toBeCloseTo(394.7841760435743, 10);
  });

  test("returns 0 when either radius is 0", () => {
    expect(surfaceAreaOfTorus(0, 1)).toBe(0);
    expect(surfaceAreaOfTorus(3, 0)).toBe(0);
  });

  test("throws error for negative radii", () => {
    expect(() => surfaceAreaOfTorus(-1, 2)).toThrow();
    expect(() => surfaceAreaOfTorus(2, -1)).toThrow();
  });
});
