//list of variables and selectors
var p= document.getElementById("id1");
var element= document.querySelectorAll(".box");
var head= document.getElementById("heading");
var Ans= document.getElementById("answer");
var resetbutton=document.getElementById("reset");
//first step is to generate random colors

var prr=[];
var selected;

reset();
setbuttons();

resetbutton.addEventListener("click",function(){
    reset();
});

resetbutton.addEventListener("mouseover",function(){
    this.style.background="grey";
});

resetbutton.addEventListener("mouseout",function(){
    this.style.background="#c8dad3";
});

//***************** */functions********************

//function to generate random color string in the form rgb(a ,b ,c)

function generatecolor(){
    //using Math.random to genreate 0-255
    var r= Math.floor(Math.random()* 256);//red
    var g= Math.floor(Math.random()* 256);//green
    var b= Math.floor(Math.random()* 256);//blue

    var color= "rgb(" + r +", "+ g +", "+ b +")";
    return color;
}

//function to make an array of colors

function colorarray(num){
    var list=[];
    for(var i=1;i<=num;i++)
    {
        var colorstring= generatecolor();
        list.push(colorstring);
    }
    return list;
}

function pickcolor(prr,len)
{
    var idx= Math.floor(Math.random()*len);
    return prr[idx];
}

//change color all function
function changecolorall(){
    for(var i=0;i<element.length;i++)
    {
        element[i].style.background= selected;
    }
}

function reset(){
     head.style.background="rgb(131, 245, 47)"; 
     resetbutton.textContent="New colors";
     Ans.style.color=" #c8dad3";
    //calling color array to generate list
     var prr = colorarray(6);
    //select one random color ans
     selected= pickcolor(prr,6);
    //change name on color on heading
    p.textContent=selected;

      for(var j=0;j<element.length;j++)
       {
           element[j].style.background =prr[j];
       }
    
} 

function setbuttons(){
    for(var j=0;j<element.length;j++)
    {
            element[j].addEventListener("click",function(){
             var clicked= this.style.background;
            //console.log("clicked color->",clicked,selected);
            if(clicked===selected)
              {
               changecolorall(); 
               resetbutton.textContent= "Play Again "
               head.style.background=selected;
               Ans.textContent="CORRECT";
               Ans.style.color="black";
              }
           else{
                this.style.background=  "#263859"; 
                Ans.textContent="TRY AGAIN";
                Ans.style.color="black";
              }
           
        });
    }
}
