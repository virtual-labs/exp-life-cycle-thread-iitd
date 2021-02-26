<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>java editor</title>
<link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<link href='http://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="linedTextEditor-jquery.js"></script>
<link href="linedTextEditor-jquery.css" type="text/css" rel="stylesheet" />

<style>
    html { min-height:100vh;}
    body {  background-color:#fafafa;}
  
  #jquery-script-menu {
  position: fixed;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  border-top: 5px solid #316594;
  background: #fff;
  -moz-box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.16);
  z-index: 999999;
  padding: 10px 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.jquery-script-center {
  width: 960px;
  margin: 0 auto;
}

.jquery-script-center ul {
  width: 212px;
  float: left;
  line-height: 45px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.jquery-script-center a { text-decoration: none; }

.jquery-script-ads {
  width: 728px;
  height: 90px;
  float: right;
}

.jquery-script-clear {
  clear: both;
  height: 0;
}
.lined{
   font-size: 1em;
 /*font-weight: bold;*/
 font-family: Verdana, Arial, Helvetica, sans-serif;
}
.input
{
    font-size: .9em;
 /*font-weight: bold;*/
 font-family: Verdana, Arial, Helvetica, sans-serif; 
}
.output
{
    font-size: .9em;
 /*font-weight: bold;*/
 font-family: Verdana, Arial, Helvetica, sans-serif; 
}
.column {
  float: left;
  width: 45.2%;
  margin-left: 4%;
}

</style>
</head>

<body>
<div ><img src="unnamed.jpg" width="250px" height="100px" style="margin-left:45px;"/><b style="margin-left:22%;font-size:35px;color:steelblue;">Java Editor</b></div>
<div class="container">
<div class="row">
<div class="column">
<form action="compilers/java.php"  name="f2" method="POST" >
<label for="ta">Write Your Code</label>
<input type="submit" id="st" class="btn btn-success" value="Run Code" style="margin-left:412px;">
<textarea name="code" class="lined" style="resize:none;">
  class Main{
    public static void main(String args[]){
      System.out.println("hello java");
    }
  }
</textarea>
<div>Input</div>
<textarea class="input" id="input" readonly="true" style="resize:none;" rows="4" cols="133" name="input"></textarea>
<br>
<h3>Note:</h3>
<div><p style="font-family: Verdana, Arial, Helvetica, sans-serif;">1. Always declare your main class as <i>"Main"</i>.</p></div>
<div><p style="font-family: Verdana, Arial, Helvetica, sans-serif;">2. For using scanner class click active button. <button onclick="Active();">Active</button></p></div>
</form>
</div>

<div class="column">
      <div style="margin-top:4px;">Output</div>
      <textarea class="output" id='div'  name="output" rows="29" cols="60" readonly="true" style="resize:none;"></textarea>
    
</div>
</div>
</div>
<script>
function Active() {
  document.getElementById("input").readOnly = false;
}
</script>
  <script>
        $(function() {
            $(".lined").linedTextEditor();
        });
    </script>

<script type="text/javascript">

  $(document).ready(function(){

     $("#st").click(function(){

           $("#div").html("Compiling and Interpreting......");


     });

  });


</script>

<script>
//wait for page load to initialize script
$(document).ready(function(){
    //listen for form submission
    $('form').on('submit', function(e){
      //prevent form from submitting and leaving page
      e.preventDefault();

      // AJAX
      $.ajax({
            type: "POST", //type of submit
            cache: false, //important or else you might get wrong data returned to you
            // url: "compile.php", //destination
            url: "compilers/java.php",

            datatype: "html", //expected data format from process.php
            data: $('form').serialize(), //target your form's data and serialize for a POST
            success: function(result) { // data is the var which holds the output of your process.php

                // locate the div with #result and fill it with returned data from process.php
                $('#div').html(result);
            }
        });
    });
});
</script>
</body>
</html>