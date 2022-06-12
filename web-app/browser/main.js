import R from "./common/ramda.js";
import Json_rpc from "./Json_rpc.js";

const grid_columns = 8;
const grid_rows = 8;

const grid = document.getElementById("grid");

R.range(0, 8).forEach(function (row_index) {
    const row = document.createElement("div");
    row.className = "row";

    R.range(0, 8).forEach(function (column_index) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = [row_index, column_index];

        row.append(cell);
    });
    grid.append(row);
});
