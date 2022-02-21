function addTotalRow(rowNum, cellNum) {
rowNum = rowNum-1


var tbl = document.getElementById('listing_table')
        var rowNum = tbl.rows.length;
        var rowCells = tbl.rows[0].cells.length;
for (var x = 0; x < rowNum; x++ ){
  var totalRow = tbl.insertRow(rowNum+x)
     totalRow.classList.add('total-rows')
 for ( var i = 0; i < cellNum; i++) {

            var cell = totalRow.insertCell(i);
            
                                  }
               }
}

function addTotalValues() {

var totalTd = document.querySelectorAll('.total-rows td')
var tbl = document.getElementById('listing_table')
        var rowNum = tbl.rows.length;
        var rowCells = tbl.rows[0].cells.length;
rowCells = rowCells -1
var subtotalRow = document.getElementsByClassName('total-rows')
subtotalRow[0].setAttribute('id','subtotal_row')
subtotalRow[2].setAttribute('id','total_row')
totalTd[(rowCells*1)-2].setAttribute('colspan','2')
totalTd[(rowCells*2)-2].setAttribute('colspan','2')
totalTd[(rowCells*3)-2].setAttribute('colspan','2')
totalTd[(rowCells*1)-2].innerHTML = " الإجمالي"
totalTd[(rowCells*1)-1].innerHTML = "{%invoice_subtotal%}"
totalTd[(rowCells*2)-2].innerHTML = "15%  VAT"
totalTd[(rowCells*2)-1].innerHTML = "{%tax-total%}"
totalTd[(rowCells*3)-2].innerHTML = "المجموع"
totalTd[(rowCells*3)-1].innerHTML = "{%invoice_total%}"



}
