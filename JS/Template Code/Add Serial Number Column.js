function addSerCol() {
      var tbl = document.getElementById('listing_table'); // table reference
      for (i = 0; i < tbl.rows.length; i++) {
        var newCell = tbl.rows[i].insertCell(0);
        newCell.id = "serial";
        newCell.innerText = i;
      }
      var firstCell = tbl.rows[0].cells[0];
      firstCell.id = "th";
      tbl.rows[0].cells[0].innerHTML = "#";
      // Styling Serial Col Head:
      var snCell = document.querySelectorAll("#listing_table tr:first-child td:first-child")[0];
      snCell.style.cssText = "font-weight:bold;text-align:center;background:#e5e5e5;vertical-align:middle;";
    }
