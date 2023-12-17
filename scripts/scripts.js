const d = new Date();
document.getElementById("demo").innerHTML = d;
function sortTable(p) {


    var s = p;

    //alert(s)




    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");

    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
      //start by saying: no switching is done:

      switching = false;

      rows = table.getElementsByTagName("TR");

      /*Loop through all table rows (except the
          first, which contains table headers):*/

      for (i = 1; i < (rows.length - 1); i++) {

        //start by saying there should be no switching:

        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/


        x = rows[i].getElementsByTagName("TD")[s];

        y = rows[i + 1].getElementsByTagName("TD")[s];
        //check if the two rows should switch place:



        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }



      }

      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }

  }









  function sortNums(p) {


    var s = p;

    //alert(s)




    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");

    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
      //start by saying: no switching is done:

      switching = false;

      rows = table.getElementsByTagName("TR");

      /*Loop through all table rows (except the
          first, which contains table headers):*/

      for (i = 1; i < (rows.length - 1); i++) {

        //start by saying there should be no switching:

        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/


        x = rows[i].getElementsByTagName("TD")[s];

        y = rows[i + 1].getElementsByTagName("TD")[s];
        //check if the two rows should switch place:



        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }



      }

      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }

  }
