$(document).ready(function() {

    $("#prepressfaceHeight").hide();
    $("#prepressface_Width").hide();
    $("#prepress_gut_Size").hide();
    $("#finface_Height").hide();
    $("#finface_Width").hide();
    $("#fingut_Size").hide();


    // Calculates the Sq.Ft.
    $("#size").change(function() {
        //function doSomeMath() {
        //get form
        prepressSizes
        var form = document.getElementById("size");
        //get output
        var out = form.elements["sqft"];
        //get two numbers
        var h = parseInt(form.elements["faceHeight"].value);
        var w = parseInt(form.elements["faceWidth"].value);
        var g = parseInt(form.elements["gutterSize"].value);
        var sqft = (h * w) / 144;
        var ags = 2;  //additional gutter size
        var psize = 2; //pocket size
        var z = 0;
        var outtext = "";
        var outtext2 = "";
        var wfinal = "";
        var bleedFinal = "";
        var fingutsize = "";


        // if sqft is less than 36 set it to 1
        if (sqft < 36)
        {
            ags = 1;
        }
        // If h and w greater than zero calculate guttersize
        //if(h>0 && w>0)
        //{
        // out.value = (sqft.toFixed(0)) + " SqFt " + ags + " Additional Guttersize";
        //  }
        // Calculates the the face height and displays it in the table
        if (h > 0 && w > 0 && g > 0)
        {
            var hfinal = ((h * 2) + g + ags) + '" H';
            $("#tfaceHeight").html(hfinal);

            var wfinal = (w + (ags*2)) +'" W' ;
            $("#tfaceWidth").html(wfinal);

            var rlswfinal = (g + 4)+'" W';
            var rlshfinal = (h)+ '" H';
            var NobleedFinal = (z);
            var bleedFinal = (g / 2) - 1;
            var fingutsize = (g + ags);
        }

        var outtext = "Face Size: " + h + '"' + " H  x " + w + '"' + " W" + '\n' + "Gutter Size: " + fingutsize + '"';



        // Calculates all the bleed, leftside height and width, rightside height and width, and displays it all in the table
        if ($('#no_lace_bag').prop('checked') && h > 0 && w > 0 && g > 0)
        {
            var finsize = (NobleedFinal + h);
            $("#faceTop_bleed,#faceBottom_bleed,#leftBottom_bleed,#rightBottom_bleed").html(NobleedFinal);
            $("#leftWidth,#rightWidth").html(rlswfinal);
            $("#leftHeight,#rightHeight").html(rlshfinal);
            $("#faceLeft_bleed,#faceRight_bleed,#faceTop_white,#faceBottom_white,#faceLeft_white,#faceRight_white,#faceLeft_pocket,#faceRight_pocket").html(z);
            $("#leftTop_bleed,#leftLeft_bleed,#leftRight_bleed,#leftTop_white,#leftBottom_white,#leftLeft_white,#leftRight_white,#leftTop_pocket,#leftLeft_pocket,#leftRight_pocket").html(z);
            $("#rightTop_bleed,#rightLeft_bleed,#rightRight_bleed,#rightTop_white,#rightBottom_white,#rightLeft_white,#rightRight_white,#rightTop_pocket,#rightBottom_pocket,#rightLeft_pocket,#rightRight_pocket").html(z);
            $("#faceTop_pocket,#faceBottom_pocket,#leftBottom_pocket,#rightBottom_pocket").html(psize);
            outtext2 = "Finished Size: " + (finsize) + '"' + " H  x " + wfinal + '"' + " W" + '\n' + "Gutter Size: " + fingutsize + '"';
        }

        else
        {
            var finsize = (bleedFinal + h);
            $("#faceTop_bleed,#faceBottom_bleed,#leftBottom_bleed,#rightBottom_bleed").html(bleedFinal);
            $("#leftWidth,#rightWidth").html(rlswfinal);
            $("#leftHeight,#rightHeight").html(rlshfinal);
            $("#faceLeft_bleed,#faceRight_bleed,#faceTop_white,#faceBottom_white,#faceLeft_white,#faceRight_white,#faceLeft_pocket,#faceRight_pocket").html(z);
            $("#leftTop_bleed,#leftLeft_bleed,#leftRight_bleed,#leftTop_white,#leftBottom_white,#leftLeft_white,#leftRight_white,#leftTop_pocket,#leftLeft_pocket,#leftRight_pocket").html(z);
            $("#rightTop_bleed,#rightLeft_bleed,#rightRight_bleed,#rightTop_white,#rightBottom_white,#rightLeft_white,#rightRight_white,#rightTop_pocket,#rightBottom_pocket,#rightLeft_pocket,#rightRight_pocket").html(z);
            $("#faceTop_pocket,#faceBottom_pocket,#leftBottom_pocket,#rightBottom_pocket").html(psize);
            outtext2 = "Finished Size: " + (h + bleedFinal) + '"' + " H  x " + wfinal + '"' + " W" + '\n' + "Gutter Size: " + fingutsize + '"';
        }

        // Calculates the FINISHED gutter size and displays it in the second table
        if (h > 0 && w > 0 && g > 0)
        {

            $("#fingutterSize").html(fingutsize);
            $("#finfaceHeight").html(finsize);
            $("#finfaceWidth").html(wfinal);

            // Calculates the PREPRESS face height by width and gutter size then displays it

            $("#prepressfaceHeight").html(h);
            $("#prepressfaceWidth").html(w);
            $("#prepress_gutterSize").html(g);

            $("#copytext").html(outtext);

            $("#copytext2").html(outtext2);
        }
    });

});
// function will clear input elements on ever form on HTML page
function clearForms() {
    // variable declaration
    var x, y, z, type = null;
    // loop through forms on HTML page
    for (x = 0; x < document.forms.length; x++) {
        // loop through each element on form
        for (y = 0; y < document.forms[x].elements.length; y++) {
            // define element type
            type = document.forms[x].elements[y].type;
            // alert before erasing form element
            //alert('form='+x+' element='+y+' type='+type);
            // switch on element type
            switch (type) {
                case 'text':
                    document.forms[x].elements[y].value = '';
                case 'textarea':
                case 'password':
                    //case "hidden":
                    document.forms[x].elements[y].value = '';
                    break;
                case 'radio':
                case 'checkbox':
                    document.forms[x].elements[y].checked = '';
                    break;
                case 'select-one':
                    document.forms[x].elements[y].options[0].selected = true;
                    break;
                case 'select-multiple':
                    for (z = 0; z < document.forms[x].elements[y].options.length; z++) {
                        document.forms[x].elements[y].options[z].selected = false;
                    }
                    break;
            } // end switch
        } // end for y
    } // end for x

    $(".resettd").text("");
}
$('.checkboxID').click(
        function() {
            $('#withWrap, #noWrap').toggle();
        });