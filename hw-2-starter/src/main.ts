// Homework Assignment: Trends in Web Development
// Now that you have JavaScript down, let's work on TypeScript!
// This assignment will test your knowledge of types, functional programming, string interpolation, and more.
// Each exercise is worth 10 points. 30 points are provided for free.
// Once you have a solution, you can run `pnpm test` to run the sample test cases we have provided.
// This does not guarantee that you will get full credit on the autograder, but it is a good start!
// Let us know if you have any questions or concerns on Ed!
//
// Make sure to specify parameter and return types in your functions!

// ============================================================
// Exercise 1: Format a Library Catalog (10 points)
//
// Input: an array of books with title, author, and genre.
// Output: an array of books where each title is wrapped in double
// quotations, author names are in all lowercase, and only 'fiction'
// genre books are included.
// =============================================================
type Book = { title: string; author: string; genre: string };
const formatLibraryCatalog = (books: Book[]): Book[] => {
  // TODO: Your code goes here
};

// ============================================================
// Exercise 2: Aggregate Cart Total (10 points)
//
// Input: array of items with price (the price per item) and quantity.
// Output: total cost.
// ============================================================
type CartItem = {
  sku: string;
  price: number;
  quantity: number;
};

const calcCartTotal = (items: CartItem[]): number => {
  // TODO
  return -1;
};

// ============================================================
// Exercise 3: Normalize Signup Form (10 points)
//
// Notes for function:
// - Trim email + displayName
// - Lowercase email
// - If displayName becomes empty after trimming => "Anonymous"
// - referralCode is optional AND may be null
// - If referralCode is nullish => default to "NONE"
// ============================================================
type SignupForm = {
  email: string;
  displayName: string;
  referralCode?: string | null;
};

type NormalizedSignup = {
  email: string;
  displayName: string;
  referralCode: string;
};

const normalizeSignup = (form: SignupForm): NormalizedSignup => {
  // TODO
  return {} as NormalizedSignup;
};

// ============================================================
// Exercise 4: Safe Nested Read (10 points)
//
// Input can be null/undefined or missing nested properties.
// Return the primaryEmail if it exists; otherwise return "Unavailable".
// ============================================================
type ApiUser = {
  profile?: {
    contact?: {
      primaryEmail?: string | null;
    } | null;
  } | null;
};

const getPrimaryEmail = (apiUser: ApiUser | null | undefined): string => {
  // TODO
  return "";
};

// ============================================================
// Exercise 5: Discriminated Union Response Handling (10 points)
//
// Define ApiResult as a union:
// - { ok: true; data: string } OR
// - { ok: false; error: string }
//
// Implement unwrapResult(result):
// - If ok is true => return data
// - Else => return error
// ============================================================
type ApiResult = {}; // TODO

const unwrapResult = (result: ApiResult): string => {
  // TODO
  return "";
};

// ============================================================
// Exercise 6: Parse Route Param into a Typed Result (10 points)
//
// Create types:
//
// type IdInput can be a string, number, null, or undefined
//
// type ParsedId can be:
//   | an object with two attributes: `ok` equal to true, and `id` of type `IdInput`
//   OR
//   | an object with two attributes: `ok` equal to false, and `reason`, which can be
//     one of the following strings: "missing", "invalid-format", or "negative-integer"
//
// Implement parseId(input: IdInput): ParsedId
//
// Notes for function:
// - If input is null/undefined => return { ok:false, reason:"missing" }
// - If input is a number:
//     - must be an integer AND >= 0 to succeed
//     - reject negative numbers as "negative-integer"
// - If input is a string:
//     - trim it
//     - reject negative numbers (e.g. "-3") as "invalid-format"
//       (try to look for string functions you can utilie to check something like this)
// ============================================================
type IdInput = never; // TODO
type ParsedId = never; // TODO

const parseId = (input: IdInput): ParsedId => {
  // TODO
  return {} as ParsedId;
};

// ============================================================
// Exercise 7: Normalize unknown into a Typed AppError (10 points)
//
// Define:
//
// enum AppErrorCode that has values NETWORK = "NETWORK", VALIDATION = "VALIDATION",
// AND UNKNOWN = "UKNOWN"
//
// type AppError that can be:
//      | an object with three attritutes: `code` with value NETWORK, `message` which
//        is a string, and `retryable` with value true
//      OR
//      | an object with attribute `code` with value VALIDATION,
//        `message` which is a string, and `field` which is an optional string
//      OR
//      | an object with attribute `code` with value UNKNOWN and
//        `message` which is a string
//
// Implement normalizeError(err: unknown): AppError
//
// Notes for function:
// - If err is a string:
//     - If it includes "network" (case-insensitive) => NETWORK
//     - Else if it starts with "field:" (e.g. "field:email") => VALIDATION with field="email"
//     - Else => UNKNOWN
// - Otherwise => UNKNOWN with message "Unknown error"
//
// Then implement:
//   formatAppError(appErr: AppError): string
//
// Output:
// - NETWORK => "Network error: <message>"
// - VALIDATION => "Validation error (<field or 'general'>): <message>"
// - UNKNOWN => "Error: <message>"
// ============================================================
enum AppErrorCode {} // TODO

type AppError = {}; // TODO

const normalizeError = (err: unknown): AppError => {
  // TODO
  return {} as AppError;
};

const formatAppError = (appErr: AppError): string => {
  // TODO
  return "";
};

export {
  formatLibraryCatalog,
  calcCartTotal,
  normalizeSignup,
  getPrimaryEmail,
  unwrapResult,
  parseId,
  normalizeError,
  formatAppError,
};

export type {
  CartItem,
  SignupForm,
  NormalizedSignup,
  ApiUser,
  ApiResult,
  IdInput,
  ParsedId,
  AppErrorCode,
  AppError,
};
