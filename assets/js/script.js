
function editor(){
    const htmlcode=document.getElementById("html-code");
    const csscode=document.getElementById("css-code");
    const jscode=document.getElementById("javascript-code");
    const output=document.getElementById("output").contentWindow.document;

    document.body.onkeyup=function(){
        output.open();
        output.writeln(
            htmlcode.value + 

            "<style>"+csscode.value+"<style>" +

            "<script>"+jscode.value +"<script>"
        );


        output.close();





    }

}
editor();