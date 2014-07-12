
 
 var colours=["#d51879","#57b1b2","#87b8d2","#739aab","#5fb683","#f8e91b","#9a8676","d51879","#57b1b2","#87b8d2","#739aab","#5fb683","#f8e91b","#9a8676"];// List of colors
 var messages=["on","an","en"];
 var tempID=0;
 var tempID2=0;
 var changeInterval=3500;    // Change interval in miliseconds  $(objectID).animate({backgroundColor: colours[tempID]},500);
 var objectID="r1";      // Object to change colours. 


 $(window).load(function(){  

 setInterval(function(){
          x=document.getElementById("E");
          SVGDoc=x.getSVGDocument()
          who=document.getElementById("bgDiv");
           who1=SVGDoc.getElementById("r1")
           who2=SVGDoc.getElementById("r2")
           who3=SVGDoc.getElementById("r3")
           who4=SVGDoc.getElementById("r4")
           who5=SVGDoc.getElementById("r5")
           who6=SVGDoc.getElementById("r6")
           nodeGroup=SVGDoc.getElementById("G")
             nodeSport=SVGDoc.getElementById("sport")
             var a=0;
            setInterval(function(){
                if (a==0) {who.style.backgroundColor=colours[tempID+6]} else
                    { whoa=SVGDoc.getElementById("r"+a) ;whoa.setAttribute("fill",colours[tempID+6-a]); }
                a++
                if (a==7) a=0;
                
            },50);
             
         
          
          who2.setAttribute("fill",colours[tempID+4]); 
          who3.setAttribute("fill",colours[tempID+3]); 
          who4.setAttribute("fill",colours[tempID+2]); 
          who5.setAttribute("fill",colours[tempID+1]); 
          
          who6.setAttribute("fill",colours[tempID+0]); 
          text=SVGDoc.getElementById("t1");
          tempID=tempID+1;
          
     
         if (tempID>=colours.length-1) {tempID=0; };
         if (tempID2>=messages.length) {tempID2=0 };
         tempID2=tempID2+1;
         if (tempID2==1) {
             text.setAttribute("font-size","3600%"); 
             text.textContent="ON";
             
             nodeSport.setAttribute("visibility","visible"); 
             
         };
         
         if (tempID2==2) {
             text.setAttribute("font-size","1000%"); 
             text.textContent="";
             var xmlns = "http://www.w3.org/2000/svg";
             var elem = document.createElementNS(null, "img");
         
             elem.setAttributeNS(null,"x",100);
             elem.setAttributeNS(null,"y",0);
             elem.setAttributeNS(null,"width",780);
             elem.setAttributeNS(null,"height",500);
             elem.setAttributeNS(null,"xlink:href", "Courage-to-Inspire.svg");
             SVGDoc.documentElement.appendChild(elem);
             
             
             nodeSport.setAttribute("visibility","hidden"); 
         };
     
         if (tempID2==3) {
             text.setAttribute("font-size","1000%"); 
             text.textContent="another";
             var xmlns = "http://www.w3.org/2000/svg";
             var elem = document.createElementNS(xmlns, "img");
            
             elem.setAttributeNS(xmlns,"x",50);
             elem.setAttributeNS(xmlns,"y",50);
             elem.setAttributeNS(xmlns,"width",1650);
             elem.setAttributeNS(xmlns,"height",1650);
             elem.setAttributeNS(xmlns,"xlink:href", "FALKEON-LOGO-final-white.svg");
             SVGDoc.documentElement.appendChild(elem);
             
         };
         
         
         
 
 },changeInterval); 
 });

 function peruse(id){
     D=document.getElementById("Em")
     SVGDoc=D.getSVGDocument()
      who=SVGDoc.getElementById(id)
      whoName=who.nodeName
    //  R=SVGDoc.createElementNS(xmlns,"rect")
      var SVGRoot = SVGDoc.documentElement;
   //   SVGRoot.appendChild(R)
      SVGDoc.getElementById(id).setAttributeNS(null, "fill", "green")
      
     alert(who.getAttributeNS(null,"fill"))
     who.setAttributeNS(null,"fill","blue")
    }
 