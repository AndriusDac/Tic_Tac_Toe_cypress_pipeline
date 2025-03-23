import { describe, expect, test } from "vitest";
import { calculateWinner } from "../App";

// // Extracting calculateWinner from App since it is not a named export
// const { calculateWinner } = App;

describe("calculateWinner", () => {
    test("returns null when no winner", () => {
        const board = [null, null, null, null, null, null, null, null, null];
        expect(calculateWinner(board)).toBe(null);
    });

    test("returns 'X' when X wins in the top row", () => {
        const board = ["X", "X", "X", null, null, null, null, null, null];
        expect(calculateWinner(board)).toBe("X");
    });

    test("returns 'O' when O wins diagonally", () => {
        const board = ["O", null, null, null, "O", null, null, null, "O"];
        expect(calculateWinner(board)).toBe("O");
    });

    test("returns 'X' when X wins vertically", () => {
        const board = ["X", null, null, "X", null, null, "X", null, null];
        expect(calculateWinner(board)).toBe("X");
    });

    test("returns 'O' when O wins horizontally", () => {
        const board = [null, null, null, "O", "O", "O", null, null, null];
        expect(calculateWinner(board)).toBe("O");
    });

    test("returns null for an empty board", () => {
        const board = Array(9).fill(null);
        expect(calculateWinner(board)).toBe(null);
    });

    test("returns null when there is no winning line", () => {
        const board = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];
        expect(calculateWinner(board)).toBe(null);
    });
});
