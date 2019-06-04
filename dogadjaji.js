

$(document).ready(function(){
  
let arr1=[
    { 
         id:"1",
        naslov:"Event1",
        img:"http://static.mondo.rs/Picture/795880/jpeg/mihajlo-pjanovic-sasa-ilic-finale-kupa.jpg",
        description:"first event",
        type:"sport"
    },
    {
        id:"2",
        naslov:"Event2",
        img:"http://static.mondo.rs/Picture/729782/jpeg/narodni-muzej-red-mondo-goran-sivacki-25.JPG",
        description:"Obeležavajući 175. godišnjicu od osnivanja, Narodni muzej najavljuje program kojim učestvuje u manifestaciji Muzeji za 10. Peti put po redu, manifestacija u čijem osnivanju je učestvovao i Narodni muzej, održava se od 13 do 19. maja i obuhvatiće obeležavanje Međunarodnog dana muzeja, Evropske noći muzeja i Nacionalne nedelje muzeja. Svake godine ova najveća nacionalna muzejska inicijativa privuče oko 200.000 posetilaca.",
        type:"kultura"
    },
    {
        id:"3",
        naslov:"Event3",
        img:"http://static.mondo.rs/Picture/794812/jpeg/noc-muzeja-2019-18-.jpg",
        description:"Od starog Teatra na Đumruku do dalekih predela Afrike, preko sada već istorijskih fudbalskih mečeva, ali i novih umetničkih praksi inspirisanih starim dečjim igrama, 16. Noć muzeja ove subote krije nekoliko skrivenih dragulja širom Beograda koje ne bi trebalo propustiti!  ",
        type:"kultura"
    },
    {
        id:"4",
        naslov:"Event4",
        img:"http://static.mondo.rs/Picture/794615/jpeg/noc.jpg",
        description:"Od starog Teatra na Đumruku do dalekih predela Afrike, preko sada već istorijskih fudbalskih mečeva, ali i novih umetničkih praksi inspirisanih starim dečjim igrama, 16. Noć muzeja ove subote krije nekoliko skrivenih dragulja širom Beograda koje ne bi trebalo propustiti!  ",
        kultura:"kultura"
    }

];
const arr2=[
    { 
        id:"1",
       naslov:"Event1",
       img:"http://static.mondo.rs/Picture/795880/jpeg/mihajlo-pjanovic-sasa-ilic-finale-kupa.jpg",
       description:"first event",
       type:"sport"
   },
   {
       id:"2",
       naslov:"Event2",
       img:"http://static.mondo.rs/Picture/729782/jpeg/narodni-muzej-red-mondo-goran-sivacki-25.JPG",
       description:"Obeležavajući 175. godišnjicu od osnivanja, Narodni muzej najavljuje program kojim učestvuje u manifestaciji Muzeji za 10. Peti put po redu, manifestacija u čijem osnivanju je učestvovao i Narodni muzej, održava se od 13 do 19. maja i obuhvatiće obeležavanje Međunarodnog dana muzeja, Evropske noći muzeja i Nacionalne nedelje muzeja. Svake godine ova najveća nacionalna muzejska inicijativa privuče oko 200.000 posetilaca.",
       type:"kultura"
   },
   {
       id:"3",
       naslov:"Event3",
       img:"http://static.mondo.rs/Picture/794812/jpeg/noc-muzeja-2019-18-.jpg",
       description:"Od starog Teatra na Đumruku do dalekih predela Afrike, preko sada već istorijskih fudbalskih mečeva, ali i novih umetničkih praksi inspirisanih starim dečjim igrama, 16. Noć muzeja ove subote krije nekoliko skrivenih dragulja širom Beograda koje ne bi trebalo propustiti!  ",
       type:"kultura"
   },
   {
       id:"4",
       naslov:"Event4",
       img:"http://static.mondo.rs/Picture/794615/jpeg/noc.jpg",
       description:"Od starog Teatra na Đumruku do dalekih predela Afrike, preko sada već istorijskih fudbalskih mečeva, ali i novih umetničkih praksi inspirisanih starim dečjim igrama, 16. Noć muzeja ove subote krije nekoliko skrivenih dragulja širom Beograda koje ne bi trebalo propustiti!  ",
       type:"kultura"
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
    




