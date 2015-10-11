function setMenuNavActive(){//Sets the current viewed pages' menu navigation item to active (highlighted)
    
    $("#navigation li").each(function( index ) {
         
        if( $( this ).prop("class") ==  "active"){
            
            $( this ).prop("class", "")
            
        }else if( $( this ).text() == document.title ){
            
             $( this ).prop("class", "active").html("<a>"+$( this ).text()+"<span class='sr-only'>(current)</span>"+"</a>");
             
             return;
        }
    });
}
