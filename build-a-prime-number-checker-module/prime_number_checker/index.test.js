const assert = require("node:assert/strict");
const primeNumberChecker = require("./index");

assert.strictEqual(
    primeNumberChecker.isPrime(4),
    false
)