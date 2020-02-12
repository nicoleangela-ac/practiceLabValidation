function checkDate ()

{

       var input  = document.getElementById("firstDate").value;
       var dateEntered = new Date(input);
       console.log(dateEntered);


       var month = dateEntered.getMonth() + 1;
       var day = dateEntered.getDate();
       var year = dateEntered.getFullYear();

       if(month < 10)
        month = '0' + month.toString();
       if(day < 10)
        day = '0' + day.toString();

       var date = '"'+ year + "-" + day +"-" + month +'"';
       console.log(date);

   	  document.getElementById("secondDate").setAttribute("min", date);
      document.getElementById("postingDate").setAttribute("max", date);




}