function swapRows(from, to, table_id) {
  var tbl = document.getElementById(table_id);
  var rows = tbl.rows
  var cellCount = tbl.rows[0].cells.length
  for (var i = 0; i < cellCount; i++) {
    var temp = rows[from].cells[i].innerHTML;
    rows[from].cells[i].innerHTML = rows[to].cells[i].innerHTML;
    rows[to].cells[i].innerHTML = temp;
  }
}
