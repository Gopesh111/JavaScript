/**
 * Surface Area of a Torus
 * Reference: https://en.wikipedia.org/wiki/Torus
 *
 * Formula:
 * A = 4 * π² * R * r
 *
 * @param {number} majorRadius - Distance from the center of the tube to the center of the torus (R)
 * @param {number} minorRadius - Radius of the tube (r)
 * @returns {number} Surface area of the torus
 */
export function surfaceAreaOfTorus(majorRadius, minorRadius) {
  if (majorRadius < 0 || minorRadius < 0) {
    throw new Error("Radii must be non-negative");
  }

  return 4 * Math.PI ** 2 * majorRadius * minorRadius;
}
