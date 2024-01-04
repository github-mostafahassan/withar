var temperature = [] ;




// var nnnn = document.querySelectorAll(".text figure img.clear")


function getWithar(searsh) {


    let req = new XMLHttpRequest();

req.open("get" ,  `http://api.weatherapi.com/v1/search.json?key=ccc3c7bf77784d52bab232443233112&q=${searsh}&days=2`)

req.send();

req.addEventListener("loadend" , function(){

    temperature = JSON.parse(req.response);

    temperature.forEach(function(rearsh) {

        

        for (let i = 0; i < temperature.length; i++) {
            
            if (req.readyState == 4 , req.status >=200 , req.status < 300) {


                console.log(JSON.parse(req.response));
                
                document.querySelector(".cite").innerHTML =  JSON.parse(req.response)[i].name;
                
                document.querySelector(".lat").innerHTML =  JSON.parse(req.response)[i].lat + "℃";
                
                console.log(JSON.parse(req.response)[i].name)
                
            }
            
            
        }



        
    });
} )
    
}




var searchCite = document.querySelector("header .searshcite");

searchCite.addEventListener("keyup" , function(e){

    getWithar(e.target.value);

    

    log(e.target.value)
})





    
    function clock() {

        function hourTaim() {

            var hour = document.querySelector(".hour");
        
            var getDeta = new Date();
        
            hour.innerHTML = getDeta.getHours()
            
        }
    
    
    
    function mainetTaim() {
    
        var minet = document.querySelector(".minet");
    
        var getDeta = new Date();
    
        minet.innerHTML = getDeta.getMinutes()
        
    }
    
    function secondTaim() {
    
        var second = document.querySelector(".second");
    
        var getDeta = new Date();
    
        second.innerHTML = getDeta.getSeconds()

        // if ( second < 10) {

        //     second = "0" + second
            
        // }
        
    }

    hourTaim()

    mainetTaim()

    secondTaim()

    
        
    }

    window.onload = function(){
        

        setInterval(clock , 500 )
    }


    function Tuesday() {

        var x = ["السبت" , "الاحد" , "الاثنين" , "الثلاثاء" , "الاربعاء" , "الخميس" , "الجمعه"]


        for(var i = 0 ; i < x.length ; i++){

            var y = new Date();

            document.querySelector(".satarDay").innerHTML = x[y.getDay()]
        }
        
    }

    Tuesday()


    // function Wednesday() {
        
    // }
