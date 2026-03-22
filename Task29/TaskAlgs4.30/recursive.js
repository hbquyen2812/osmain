"use strict";

// =============================================
// 1. BACKTRACKING - N-Queens Problem
// =============================================

/**
 * Giai bai toan N-Queens bang thuat toan quay lui (backtracking).
 * Dat N quan hau len ban co NxN sao cho khong co 2 quan hau nao tan cong nhau.
 *
 * @param {number} n - Kich thuoc ban co
 * @returns {string[][]} Mang cac loi giai, moi loi giai la mang cac hang ('Q' = quan hau, '.' = trong)
 *
 * @example
 * nQueens(4);
 * // returns [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]
 */
function nQueens(n) {
    const solutions = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    solve(0);
    return solutions;

    function solve(row) {
        if (row === n) {
            const copy = board.map(r => r.join(''));
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

// =============================================
// 2. DIVIDE AND CONQUER - Merge Sort
// =============================================

/**
 * Sap xep mang bang thuat toan Merge Sort (chia de tri de quy).
 *
 * @param {number[]} arr - Mang can sap xep
 * @returns {number[]} Mang da sap xep tang dan
 *
 * @example
 * mergeSort([6, 8, 9, 1]); // returns [1, 6, 8, 9]
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

/**
 * Tron hai mang da sap xep thanh mot mang sap xep.
 *
 * @param {number[]} left - Mang trai da sap xep
 * @param {number[]} right - Mang phai da sap xep
 * @returns {number[]} Mang da tron va sap xep
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

// =============================================
// 3. RECURSION - Tower of Hanoi
// =============================================

/**
 * Giai bai toan Thap Ha Noi bang de quy.
 * Di chuyen n dia tu cot from sang cot to, su dung cot aux lam trung gian.
 *
 * @param {number} n - So dia
 * @param {string} from - Cot nguon
 * @param {string} to - Cot dich
 * @param {string} aux - Cot trung gian
 * @param {string[]} steps - Mang luu cac buoc di chuyen
 *
 * @example
 * const steps = [];
 * hanoi(3, 'A', 'C', 'B', steps);
 * // steps = ["Move disk 1 from A to C", "Move disk 2 from A to B", ...]
 */
function hanoi(n, from, to, aux, steps) {
    if (n === 1) {
        steps.push("Move disk 1 from " + from + " to " + to);
        return;
    }
    hanoi(n - 1, from, aux, to, steps);
    steps.push("Move disk " + n + " from " + from + " to " + to);
    hanoi(n - 1, aux, to, from, steps);
}

// =============================================
// MAIN - Goi ca 3 thuat toan va hien thi ket qua
// =============================================

function runAll() {
    // 1. Backtracking: N-Queens voi N = 5
    var queenSolutions = nQueens(5);
    var queenOutput = "Tim duoc " + queenSolutions.length + " loi giai cho ban co 5x5:\n\n";
    for (var i = 0; i < queenSolutions.length; i++) {
        queenOutput += "Loi giai " + (i + 1) + ":\n";
        for (var r = 0; r < queenSolutions[i].length; r++) {
            queenOutput += "  " + queenSolutions[i][r] + "\n";
        }
        queenOutput += "\n";
    }
    document.getElementById('nQueensResult').innerText = queenOutput;

    // 2. Divide and Conquer: Merge Sort voi [6, 8, 9, 1]
    var inputArr = [6, 8, 9, 1];
    var sortedArr = mergeSort(inputArr);
    var sortOutput = "Input:  [" + inputArr.join(", ") + "]\n";
    sortOutput += "Output: [" + sortedArr.join(", ") + "]";
    document.getElementById('mergeSortResult').innerText = sortOutput;

    // 3. Tower of Hanoi voi 4 dia
    var hanoiSteps = [];
    hanoi(4, 'A', 'C', 'B', hanoiSteps);
    var hanoiOutput = "So buoc: " + hanoiSteps.length + " (2^4 - 1 = 15)\n\n";
    for (var j = 0; j < hanoiSteps.length; j++) {
        hanoiOutput += "Buoc " + (j + 1) + ": " + hanoiSteps[j] + "\n";
    }
    document.getElementById('hanoiResult').innerText = hanoiOutput;
}
