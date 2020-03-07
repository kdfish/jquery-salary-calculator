console.log("Js")

$(document).ready(onReady);

function onReady(){

  $('#btn-submit').on('click', handleClick);

  function handleClick( event ){
    console.log('in handleClick');

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let annualSalary = $("#annualSalary").val();

    console.log('Got inputs:', firstName, lastName, id, title, annualSalary);




  }

}