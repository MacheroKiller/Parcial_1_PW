$(document).ready(function () {
    var i=1;
      $('#btlikes').click(function(){
         var like = document.getElementById("likes").value;
         if(like!==""){
         var line = '<tr id="row'+i+'"><td>'+like+'</td><td>' + "0" + '</td><td> <button type="button" id="'+i+'" class="buttonedit">Editar</button> </td></tr>';
         $("#tableLikes").append(line);
         i++
         console.log(i);
         }
      });

      $('#formtable').on('click', '.buttonedit', function(){
        text = '<br> Pulse aceptar para guardar los cambios o cancelar para anularlos'
        $("#formtable").append(text);
        button = '<div class="btn-group"><input id="accept" type="submit" value="Aceptar"/><button id="cancel" type="button">Cancelar</button></div>'
        $("#formtable").append(button);
        var button_id = $(this).attr("id");
        console.log(button_id);
        var row = '#row' + button_id + '';
        var likevalue = $(row).find("td:first").html();
        $(row).replaceWith('<tr><td> <input id="boxLikes" name="boxlikes" type="text" value='+likevalue+'> </td><td> <input id="Percentage" name="percentage" type="number" value=0> </td><td>En edicion</td></tr>');
        $('#accept').click(function(){
        
        })

    })

    });