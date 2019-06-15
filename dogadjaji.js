

$(document).ready(function(){
  
let arr1=[
    { 
         id:"1",
        naslov:"Event1",
        img:"https://t-ec.bstatic.com/images/hotel/max1024x768/650/65026569.jpg",
        description:"Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt.",
        type:"sport"
    },
    {
        id:"2",
        naslov:"Event2",
        img:"https://odis.homeaway.com/odis/listing/e8679033-540f-4dae-b791-b6c0c71d8faf.c10.jpg",
        description:"Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt.",
        type:"kultura"
    },
    {
        id:"3",
        naslov:"Event3",
        img:"https://www.makalius.lt/wp-content/gallery/seiseliai-galerija/valtis.jpg",
        description:" Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt.",
        
        type:"kultura"
    },
    {
        id:"4",
        naslov:"Event4",
        img:"http://static.mondo.rs/Picture/794615/jpeg/noc.jpg",
        description:" Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt.",
        
        kultura:"kultura"
    },
    {
        id:"5",
        naslov:"Event5",
        img:"http://gulflife.online/wp-content/uploads/2017/04/01-1.png",
        description:"lLorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt.",
        kultura:"kultura"
    }

];
const arr2=[
    { 
        id:"1",
       naslov:"Event1",
       img:"https://cdn.bitlanders.com/users/galleries/459391/459391_gallery_56517511e17cb_jpg_fa_rszd.jpg",
       description:"Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt."
       ,
       type:"sport"
   },
   {
       id:"2",
       naslov:"Event2",
       img:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/08/31/11/andregomes3108abc.jpg",
       description:"Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt."
       ,
       type:"sport"
   },
   {
       id:"3",
       naslov:"Event3",
       img:"https://t-ec.bstatic.com/images/hotel/max1024x768/650/65026569.jpg",
       description:" Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt."
       ,
       type:"kultura"
   },
   {
       id:"4",
       naslov:"Event4",
       img:"https://www.kanuhura.com/sites/default/files/styles/720x460/public/externals/Kanuhura_aerial__57_-1600x1199-1101bbee-2c98-4d6b-8b01-4c10adad8f84.jpg?itok=Tk0tcMyK",
       description:" Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt."
       ,
       type:"kultura"
   },
   {
    id:"5",
    naslov:"Event4",
    img:"https://www.kanuhura.com/sites/default/files/styles/720x460/public/externals/Kanuhura_aerial__57_-1600x1199-1101bbee-2c98-4d6b-8b01-4c10adad8f84.jpg?itok=Tk0tcMyK",
    description:" Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt."
    ,
    type:"zabava"
},
{
    id:"6",
    naslov:"Event4",
    img:"https://www.kanuhura.com/sites/default/files/styles/720x460/public/externals/Kanuhura_aerial__57_-1600x1199-1101bbee-2c98-4d6b-8b01-4c10adad8f84.jpg?itok=Tk0tcMyK",
    description:" Lorem ipsum dolor sit amet, eam debet ocurreret cu, meliore repudiare cotidieque pri te. Facilisi atomorum qui ea, ex melius bonorum mea. No dolorem reprehendunt mea, sea possit definiebas cu, an vis modo melius sanctus. Veri petentium democritum mea ea, vix te stet dicant deserunt."
    ,
    type:"zabava"
}


]; 
arr1.forEach(function(element){
    const blok=$("<div>");
    const head=$("<h4>").text(`${element.naslov}`);
    const image=$("<img src=''>").attr("src", element.img);
    const text=$("<p>").text(`${element.description}`);
    blok.addClass("carousel col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 ");
    blok.attr("id", `${element.id}`);
    blok.append(head, image, text);
    $(".rail").append(blok);   
})
setInterval(()=>{
   
 
arr1.push(arr1[0]);

arr1.shift();
 arr1.forEach(function(element){
    const blok=$("<div>");
    const head=$("<h4>").text(`${element.naslov}`);
    const image=$("<img src=''>").attr("src", element.img);
    const text=$("<p>").text(`${element.description}`);
    blok.addClass("carousel col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2");
    blok.attr("id", `${element.id}`);
    blok.append(head, image, text);
    $(".rail").append(blok);   

 

});

},3000);

setInterval(()=>{
$(".carousel").fadeOut(200);    
$(".carousel").remove();

},2999)

 
    
    
$(".submit").click(function(event){
    event.preventDefault();
    if($(".input1").val().toLowerCase()==="mitar" && $(".input2").val().toLowerCase()==="miric" ){
    const modal0=$(".modal0")
  $(".fade").css("opacity", "1");
   modal0.css("display", "block");
   }
})

$(".sport").click(function(){
    const filterArr2=arr2.filter(element=>element.type.includes("sport"));
    $(".card").remove();
    filterArr2.forEach(function(element){

        const main=$("<div>");
        const head=$("<h5>").text(`${element.naslov}`);
        const img=$("<img src=''>").attr("src", element.img);
        const text=$("<p>").text(`${element.description}`);
        main.addClass("card mb-3");
        main.attr("id", `${element.id}`);
        main.append(head, img, text)
        $(".mainappend").append(main);
        $(".card").click(function(){
            const id=$(this).attr("id");
            console.log(id);
            localStorage.setItem("id", id);
            const modal1=$(".modal1")
           
             
             if(element.id===localStorage.getItem("id")){
                 console.log(element.id)
                 const img2=$("<img src=''>").attr("src", element.img);
                const text2=$("<p>").text(element.description);
                text2.attr("class", "modal-text")
                $(".modal-title").text(element.naslov);
                $(".modal-body2").append(img2);
                img2.attr("class", "col-6 modal-img");
                $(".modal-body2").append(text2)
                $(".fade").css("opacity", "1");
                modal1.css("display", "block");
             }
             })
        })

    })
$(".kultura").click(function(){
    const filterArr2=arr2.filter(element=>element.type.includes("kultura"));
    $(".card").remove();
    filterArr2.forEach(function(element){

        const main=$("<div>");
        const head=$("<h5>").text(`${element.naslov}`);
        const img=$("<img src=''>").attr("src", element.img);
        const text=$("<p>").text(`${element.description}`);
        main.addClass("card mb-3");
        main.attr("id", `${element.id}`);
        main.append(head, img, text)
        $(".mainappend").append(main);
        $(".card").click(function(){
            const id=$(this).attr("id");
            console.log(id);
            localStorage.setItem("id", id);
            const modal1=$(".modal1")
            if(element.id===localStorage.getItem("id")){
                console.log(element.id);
                const img3=$("<img src=''>").attr("src", element.img);
                const text3=$("<p>").text(element.description);
                text3.attr("class", "modal-text")
                $(".modal-title").text(element.naslov);
                $(".modal-body2").append(img3);
                img3.attr("class", "col-6 modal-img");
                $(".modal-body2").append(text3)

                $(".fade").css("opacity", "1");
             modal1.css("display", "block"); 
            }
            })
           
             })

    })


$(".zabava").click(function(){
    const filterArr2=arr2.filter(element=>element.type.includes("zabava"));
    $(".card").remove();
    filterArr2.forEach(function(element){

        const main=$("<div>");
        const head=$("<h5>").text(`${element.naslov}`);
        const img=$("<img src=''>").attr("src", element.img);
        const text=$("<p>").text(`${element.description}`);
        main.addClass("card mb-3");
        main.attr("id", `${element.id}`);
        main.append(head, img, text)
        $(".mainappend").append(main);
        $(".card").click(function(){
            const id=$(this).attr("id");
            console.log(id);
            localStorage.setItem("id", id);
            const modal1=$(".modal1")
            if(element.id===localStorage.getItem("id")){
                console.log(element.id);
                const img4=$("<img src=''>").attr("src", element.img);
                const text4=$("<p>").text(element.description);
                text4.attr("class", "modal-text")
                $(".modal-title").text(element.naslov);
                $(".modal-body2").append(img4);
                img4.attr("class", "col-6 modal-img");
                $(".modal-body2").append(text4)


            $(".fade").css("opacity", "1");
             modal1.css("display", "block");
            }
             })

    })

})

function Event(id, naslov, img, description, type){
   this.id=id;
   this.naslov=naslov;
   this.img=img;
   this.description=description;
   this.type=type;
   
}
$(".upload").click(function(){
    const id=""+arr2.length;
    const naslov=$(".naslovinput").val();
    const img=$(".imginput").val();
    const description=$(".description").val();
    const type=$(".type").val();

    const newEvent=new Event(id, naslov, img, description, type);
    arr2.push(newEvent);
    console.log(arr2);

})

});

$(".close1").click(function(){
    const modal0=$(".modal0");
    $(".fade").css("opacity", "0");
    modal0.css("display", "none");
    $(".input1").val("");
    $(".input2").val("");
})
$(".close2").click(function(){
    const modal1=$(".modal1");
    $(".fade").css("opacity", "0");
    modal1.css("display", "none");
    $(".modal-title").text("");
    $(".modal-img").remove();
    $(".modal-text").remove();
    
    
})

$(".kontakt").click(function(){
    window.open("kontaktPage.html");
})
    




