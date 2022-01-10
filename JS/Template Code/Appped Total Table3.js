======================= RELATED HTML ========================

<div style="display:none">
<div id="sub">{%invoice_subtotal%}
</div>
<div id="tax">{%tax-total%}
</div>
<div id="dis">{%discount%}
</div>
<div id="total">{%invoice_total%}
</div>
<div id="qr_code">
{%sa_qr_code_image%}
</div>
<div id="spelled_total">{%invoice_total_spelled%}
</div>
</div>

=========================================================

<script>
function totalTable(){
var tbl=document.getElementById("listing_table");
var startingRow = tbl.rows.length;
for(var i=0;i<5;i++){

var row= tbl.insertRow(startingRow+i);
row.classList.add('total_row');

var cell1 = row.insertCell(0);
cell1.colSpan = "4";
var cell2 = row.insertCell(1);
cell2.colSpan = "3";
var cell3 = row.insertCell(2);
}

var firstCell = document.querySelectorAll('.total_row td:nth-child(1)');
firstCell[0].rowSpan = "3";
firstCell[3].rowSpan = "2";

firstCell[0].style.verticalAlign = 'middle';
firstCell[3].style.verticalAlign = 'middle';

document.querySelectorAll('.total_row td:nth-child(1)')[1].outerHTML = "";
document.querySelectorAll('.total_row td:nth-child(1)')[2].outerHTML = "";
document.querySelectorAll('.total_row td:nth-child(1)')[4].outerHTML = "";

var spelled = document.getElementById('spelled_total').innerText;
var notes = document.getElementById('notes').innerText;
firstCell[0].innerHTML = "Total Amount (in words):          :القيمة الاجمالية بالكلمات" + "<br>" + "<strong>" + spelled + "</strong>";
firstCell[3].innerHTML = " ملاحظات: " + notes    
firstCell[3].style.direction ="rtl"

document.querySelectorAll('.total_row')[0].querySelector('td:nth-child(2)').innerText = "Total المجموع الكلي";
document.querySelectorAll('.total_row')[1].querySelector('td:nth-child(1)').innerText = "Discount  خصم";
document.querySelectorAll('.total_row')[2].querySelector('td:nth-child(1)').innerText = "Total after Disc.  الاجمالي بعد الخصم";
document.querySelectorAll('.total_row')[3].querySelector('td:nth-child(2)').innerText = "Amount Vat 15% ضريبة القيمة المضافة";
document.querySelectorAll('.total_row')[4].querySelector('td:nth-child(1)').innerText = "المجموع مع ضريبة القيمة المضافة";

var subb = parseFloat(document.getElementById('sub').innerText.replace(",", "").replace("ر.س ",""));
var diss= parseFloat(document.getElementById('dis').innerText.split("ر"));

var sub = document.getElementById('sub').innerText;
var tax = document.getElementById('tax').innerText;
var dis= document.getElementById('dis').innerText;
var total = document.getElementById('total').innerText;
document.querySelectorAll('.total_row')[0].querySelector('td:nth-child(3)').innerText = sub;
document.querySelectorAll('.total_row')[1].querySelector('td:nth-child(2)').innerText = dis;
document.querySelectorAll('.total_row')[2].querySelector('td:nth-child(2)').innerText = subb - diss + " ر.س";
document.querySelectorAll('.total_row')[3].querySelector('td:nth-child(3)').innerText = tax;
document.querySelectorAll('.total_row')[4].querySelector('td:nth-child(2)').innerText = total;

}


</script>
