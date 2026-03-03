import { expect, test } from "vitest";
import {
  formatLibraryCatalog,
  calcCartTotal,
  normalizeSignup,
  getPrimaryEmail,
  unwrapResult,
  parseId,
  normalizeError,
  formatAppError,
} from "./main.ts";

// Exercise 1 Tests
test("formatLibraryCatalog should format and filter books", () => {
  expect(
    formatLibraryCatalog([
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "fiction",
      },
      {
        title: "Brief Answers to the Big Questions",
        author: "Stephen Hawking",
        genre: "non-fiction",
      },
    ]),
  ).toEqual([
    {
      title: '"The Great Gatsby"',
      author: "f. scott fitzgerald",
      genre: "fiction",
    },
  ]);
});

// Exercise 2 Tests
test("calcCartTotal should sum priceCents * quantity (and return 0 for empty)", () => {
  expect(calcCartTotal([])).toBe(0);

  expect(
    calcCartTotal([
      { sku: "A", price: 500, quantity: 2 }, // 1000
      { sku: "B", price: 250, quantity: 1 }, // 250
    ]),
  ).toBe(1250);

  expect(calcCartTotal([{ sku: "X", price: 199, quantity: 3 }])).toBe(597);
});

// Exercise 3 Tests
test("normalizeSignup should trim + lowercase email, trim displayName, default displayName/referralCode correctly", () => {
  expect(
    normalizeSignup({
      email: "  Esha@Example.Com ",
      displayName: "  Esha  ",
      referralCode: undefined,
    }),
  ).toEqual({
    email: "esha@example.com",
    displayName: "Esha",
    referralCode: "NONE",
  });

  expect(
    normalizeSignup({
      email: "  test@site.com",
      displayName: "   ",
      referralCode: null,
    }),
  ).toEqual({
    email: "test@site.com",
    displayName: "Anonymous",
    referralCode: "NONE",
  });

  expect(
    normalizeSignup({
      email: "a@b.com",
      displayName: "A",
      referralCode: "REF123",
    }),
  ).toEqual({ email: "a@b.com", displayName: "A", referralCode: "REF123" });
});

// Exercise 4 Tests
test("getPrimaryEmail should safely return nested email or Unavailable", () => {
  expect(
    getPrimaryEmail({
      profile: { contact: { primaryEmail: "user@site.com" } },
    }),
  ).toBe("user@site.com");

  expect(getPrimaryEmail({})).toBe("Unavailable");
  expect(getPrimaryEmail(null)).toBe("Unavailable");
  expect(getPrimaryEmail(undefined)).toBe("Unavailable");
  expect(getPrimaryEmail({ profile: null })).toBe("Unavailable");
  expect(getPrimaryEmail({ profile: { contact: null } })).toBe("Unavailable");
  expect(
    getPrimaryEmail({ profile: { contact: { primaryEmail: null } } }),
  ).toBe("Unavailable");
});

// Exercise 5 Tests
test("unwrapResult should return data on ok:true and error on ok:false", () => {
  expect(unwrapResult({ ok: true, data: "Hello" })).toBe("Hello");
  expect(unwrapResult({ ok: false, error: "Nope" })).toBe("Nope");
});

// Exercise 6 Tests
test("parseId should return missing for null/undefined", () => {
  expect(parseId(undefined)).toEqual({ ok: false, reason: "missing" });
  expect(parseId(null)).toEqual({ ok: false, reason: "missing" });
});

test("parseId should accept non-negative integers as numbers", () => {
  expect(parseId(0)).toEqual({ ok: true, id: 0 });
  expect(parseId(123)).toEqual({ ok: true, id: 123 });
});

test("parseId should reject negative numbers", () => {
  expect(parseId(-1)).toEqual({ ok: false, reason: "negative-integer" });
});

test("parseId should parse/validate string inputs", () => {
  expect(parseId(" 123 ")).toEqual({ ok: true, id: "123" } as any);
  expect(parseId("-3")).toEqual({ ok: false, reason: "invalid-format" });
});

// Exercise 7 Tests
test("normalizeError should classify network (case-insensitive), validation field:, or unknown", () => {
  // network (case-insensitive)
  expect(normalizeError("NETWORK timeout").code).toBe("NETWORK");
  expect(formatAppError(normalizeError("network timeout"))).toBe(
    "Network error: network timeout",
  );

  // validation field
  const v1 = normalizeError("field:email");
  expect(v1.code).toBe("VALIDATION");
  expect(formatAppError(v1)).toBe("Validation error (email): field:email");

  // unknown string
  expect(formatAppError(normalizeError("something else"))).toBe(
    "Error: something else",
  );

  // non-string => unknown error message
  expect(formatAppError(normalizeError({ message: "nope" }))).toBe(
    "Error: Unknown error",
  );
  expect(formatAppError(normalizeError(null))).toBe("Error: Unknown error");
});

test("formatAppError should format all codes exactly", () => {
  expect(
    formatAppError({
      code: "NETWORK" as any,
      message: "down",
      retryable: true,
    } as any),
  ).toBe("Network error: down");
  expect(
    formatAppError({
      code: "VALIDATION" as any,
      message: "bad",
      field: "name",
    } as any),
  ).toBe("Validation error (name): bad");
  expect(
    formatAppError({ code: "VALIDATION" as any, message: "bad" } as any),
  ).toBe("Validation error (general): bad");
  expect(
    formatAppError({ code: "UNKNOWN" as any, message: "oops" } as any),
  ).toBe("Error: oops");
});
