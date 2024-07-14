let body = document.querySelector('body');
        body.style.backgroundColor = '#00c1b5';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            let scroll = window.pageYOffset;
            if (scroll < 450) {
                
                body.style.backgroundColor = '#1d3fbb';
            } else if (scroll >= 450 && scroll < 1150) {
            
                body.style.backgroundColor = '#F6E0A4';
            } else if (scroll >= 1150 && scroll < 1800) {
                
                body.style.backgroundColor = '#FF6519';
            } else if (scroll >= 1800 && scroll < 2400) {
                
                body.style.backgroundColor = '#FF608C';
            }else if(scroll >= 2400 && scroll < 3100){
                body.style.backgroundColor='#E30512';

            }else if(scroll >= 3100 && scroll < 3600){
                body.style.backgroundColor='#00C1B5';

            }
            else if(scroll >= 3600 && scroll < 4200){
                body.style.backgroundColor='#FFFF';

            }
            else if(scroll >= 4200 && scroll < 5300){
                
                body.style.backgroundColor = '#FFBE00';
            }
        }