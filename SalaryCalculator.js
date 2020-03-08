console.log("Js")

$(document).ready(onReady);

function onReady(){

    let total = 0;
    console.log(total);

    $("#Total").text(total);


  $('#btn-submit').on('click', handleClick);

  function handleClick( event ){
    console.log('in handleClick');

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let annualSalary = $("#annualSalary").val();

    console.log('Got inputs:', firstName, lastName, id, title, annualSalary);
   
    total += (annualSalary / 12);
    $("#Total").text(total);


    $( '#employees' ).append(`
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td> 
    <td>${annualSalary}</td>
    <td><button type="submit" form="form1" value="Submit">Delete</button></td>
  </tr>
    `);


  }

}