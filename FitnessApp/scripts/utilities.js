$("#delete-all-friends").click(function(){
        
        var isDeletingAll = window.confirm("Are you sure you want to delete all friends?");
        
        if (isDeletingAll) {
            
            alert("Waiting for database implementation to be able to delete friends.");
            
        } else {
            
            alert("Smart choice.");

        }
        
    });