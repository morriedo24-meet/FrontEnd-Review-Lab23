var clickState = 0;
function changeBackgroundColor(color, color2){
	   
	   clickState++;

        if (clickState ==1 ) {
            document.body.style.backgroundColor = color;
        }if (clickState == 2 ) {
             document.body.style.backgroundColor = color2;
        } 
        if(clickState==2){
        	clickState = 0;
        }
		

    }
    
  
    