/**
 * Solves the N-Queens problem and displays the result.
 * 
 * The N-Queens problem is a classic problem in computer science where we have to place N queens on an NxN chessboard 
 * such that no two queens attack each other.
 * 
 * @param {none} - This function does not take any parameters. It gets the value of N from the HTML element with id 'nQueens'.
 * @returns {none} - This function does not return any value. It displays the result in the HTML element with id 'nQueensResult'.
 * 
 * Example:
 * If the input is 4, the output will be something like [["0,1","1,3","2,0","3,2"],["0,2","1,0","2,3","3,1"]].
 * This means there are two ways to place 4 queens on a 4x4 chessboard such that no two queens attack each other.
 * In the first way, the queens are placed at positions (0,1), (1,3), (2,0), and (3,2).
 * In the second way, the queens are placed at positions (0,2), (1,0), (2,3), and (3,1).
 */
function solveNQueens() {
    const n = parseInt(document.getElementById('nQueens').value);
    const result = nQueens(n);
    document.getElementById('nQueensResult').innerText = JSON.stringify(result);
}
/**
 * Solves the N-Queens problem using backtracking.
 *
 * The N-Queens problem is a classic problem in computer science where the goal is to place N queens on an NxN chessboard
 * such that no two queens attack each other.
 *
 * @param {number} n - The size of the chessboard (number of rows and columns).
 * @returns {string[][]} An array of solutions, where each solution is an array of strings representing the chessboard.
 * Each string represents a row on the chessboard, with 'Q' indicating a queen and '.' indicating an empty space.
 *
 * Example:
 *   nQueens(4)
 *   // returns [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]
 */
function nQueens(n) {
    const solutions = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    solve(0);
    return solutions;

    /**
     * Recursive function to solve the N-Queens problem.
     *
     * @param {number} row - The current row to place a queen on.
     */
    function solve(row) {
        if (row === n) {
            const copy = board.map(row => row.join(''));
            solutions.push(copy);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                solve(row + 1);
                board[row][col] = '.';
            }
        }
    }

    /**
     * Checks if it is safe to place a queen at the given position on the board.
     *
     * @param {number} row - The row to check.
     * @param {number} col - The column to check.
     * @returns {boolean} True if it is safe to place a queen at the given position, false otherwise.
     */
    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
}
/**
 * Run the merge sort algorithm on the input array.
 * @example
 * runMergeSort([3, 6, 1, 8, 2, 4]);
 */
function runMergeSort() {
    const input = document.getElementById('mergeSortInput').value;
    const arr = input.split(',').map(Number);
    const result = mergeSort(arr);
    document.getElementById('mergeSortResult').innerText = result.join(',');
}

/**
 * Merge sort algorithm using divide and conquer approach.
 * @param {number[]} arr - The input array to be sorted.
 * @returns {number[]} - The sorted array.
 * @example
 * mergeSort([3, 6, 1, 8, 2, 4]); // returns [1, 2, 3, 4, 6, 8]
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
/**
 * Merge two sorted arrays into a single sorted array.
 * @param {number[]} left - The first sorted array.
 * @param {number[]} right - The second sorted array.
 * @returns {number[]} - The merged sorted array.
 * @example
 * merge([1, 3, 5], [2, 4, 6]); // returns [1, 2, 3, 4, 5, 6]
 */
function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
/**
 * Solves the Tower of Hanoi problem.
 *
 * The Tower of Hanoi is a mathematical puzzle where we have three rods and n disks.
 * The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
 * 1) Only one disk can be moved at a time.
 * 2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
 * 3) No disk may be placed on top of a smaller disk.
 *
 * @param {number} n - The number of disks.
 * @param {string} from - The rod where disks are initially located.
 * @param {string} to - The rod where disks need to be moved.
 * @param {string} aux - The auxiliary rod.
 * @returns {string[]} An array of moves to solve the puzzle.
 *
 * @example
 * const result = hanoi(3, 'A', 'C', 'B');
 * console.log(result);
 * // Output:
 * // [
 * //   "Move disk 1 from A to C",
 * //   "Move disk 2 from A to B",
 * //   "Move disk 1 from C to B",
 * //   "Move disk 3 from A to C",
 * //   "Move disk 1 from B to A",
 * //   "Move disk 2 from B to C",
 * //   "Move disk 1 from A to C"
 * // ]
 */

function solveHanoi() {
    const n = parseInt(document.getElementById('hanoiDisks').value);
    const result = [];
    hanoi(n, 'A', 'C', 'B');
    document.getElementById('hanoiResult').innerText = result.join(', ');

    /**
     * Recursive function to solve the Tower of Hanoi problem.
     *
     * @param {number} n - The number of disks.
     * @param {string} from - The rod where disks are initially located.
     * @param {string} to - The rod where disks need to be moved.
     * @param {string} aux - The auxiliary rod.
     */
    function hanoi(n, from, to, aux) {
        if (n === 1) {
            result.push(`Move disk 1 from ${from} to ${to}`);
            return;
        }
        hanoi(n - 1, from, aux, to);
        result.push(`Move disk ${n} from ${from} to ${to}`);
        hanoi(n - 1, aux, to, from);
    }
}
