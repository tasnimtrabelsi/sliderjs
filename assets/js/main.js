var tab=[]

function tableau(){
 var carac={

     'lien':"assets/img/categ_nails_home@1x.png",
     'titre':"bureautique",
     'description':"17",
     'name':"tasnim"
 }
 
for(i=0;i<5;i++) {
    tab.push(carac);
  
}

}
tableau();
function card(){
    for(i=0;i<tab.length;i++){
    var html='<div class="carousel-item col-md-4" >';
      html+='<img  src='+tab[i].lien+' alt="Card image cap">'
 
 html+='<h1>'+tab[i].name+'</h1>';
 html+='<p>'+tab[i].description+'</p>';
 html+='<p>'+tab[i].titre+'</p>'
 html+='</div>';
 document.getElementById('carousel').innerHTML+=html;
 }
}
 card();

 