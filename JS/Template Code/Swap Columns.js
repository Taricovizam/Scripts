
  function swapCols(from,to,table_id)
  {
    var table = document.getElementById(table_id);
    for (var i = 0, row; row = table.rows[i]; i++)
    {
      var temp = row.cells[from].innerHTML;
      row.cells[from].innerHTML = row.cells[to].innerHTML;
      row.cells[to].innerHTML = temp;
    }
  }
  try
  {
    swapCols(4,2,'listing_table');
   }
   catch(err){}
