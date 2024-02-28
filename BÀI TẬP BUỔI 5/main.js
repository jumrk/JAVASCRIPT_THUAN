    var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        image:"https://www.celeb.vn/wp-content/uploads/2022/09/quan-tay-nam-den-form-slimfit-qt006-12.jpg"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        image:"https://www.celeb.vn/wp-content/uploads/2022/08/IMG_5636-copy-Copy-2.jpg"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "350.000",
        image:"https://www.celeb.vn/wp-content/uploads/2022/09/quan-tay-nam-den-9qt08-1.webp"
    },
    {
        id: 4,
        name: "The Cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "260.000",
        image:"https://www.celeb.vn/wp-content/uploads/2022/09/quan-tay-nam-den-9qt08-1.webp"
    },
        
    ]

    var woment =[
        {
            id: 1,
            name: "Váy Fashion",
            code: "TC1025011BA",
            price: "260.000",
            image:"https://cdn.kkfashion.vn/16269-home_default/dam-xoe-hoa-cong-so-co-v-vien-beo-kk113-22.jpg"
        },
        {
            id: 2,
            name: "Áo thun phối váy ngắn",
            code: "TC1025011BA",
            price: "260.000",
            image:"https://th.bing.com/th/id/OIP.k9MxVNu6I961xTAMKeKlGwHaLH?w=1200&h=1802&rs=1&pid=ImgDetMain"
        },
        {
            id: 3,
            name: "Áo khoác",
            code: "TC1025011BA",
            price: "260.000",
            image:"https://th.bing.com/th/id/OIP.k9MxVNu6I961xTAMKeKlGwHaLH?w=1200&h=1802&rs=1&pid=ImgDetMain"
        },
        {
            id: 4,
            name: "Áo thun",
            code: "TC1025011BA",
            price: "260.000",
            image:"https://th.bing.com/th/id/OIP.k9MxVNu6I961xTAMKeKlGwHaLH?w=1200&h=1802&rs=1&pid=ImgDetMain"
        },
        
    ]

    function listProduct() {
        for(let i = 0; i < man.length; i++){
            var demo ='<div class="card" style="width: 20rem;">' 
                demo += '     <img src="'+man[i].image+'" class="card-img-top" alt="...">'   
                demo += '     <div class="card-body">'   
                demo += '       <h5 class="card-title">'+man[i].name+'</h5>'   
                demo += '       <p class="card-text">'+man[i].price+'</p>'   
                demo += '       <a href="#" class="btn btn-primary">Go somewhere</a>'   
                demo += '     </div>'   
                demo += '   </div>'  
                
        document.getElementById("man").innerHTML += demo;
        }
        for(let i = 0; i < woment.length; i++){
            var demo ='<div class="card" style="width: 20rem;">' 
                demo += '     <img src="'+woment[i].image+'" class="card-img-top" alt="...">'   
                demo += '     <div class="card-body">'   
                demo += '       <h5 class="card-title">'+woment[i].name+'</h5>'   
                demo += '       <p class="card-text">'+woment[i].price+'</p>'   
                demo += '       <a href="#" class="btn btn-primary">Go somewhere</a>'   
                demo += '     </div>'   
                demo += '   </div>'  
                
        document.getElementById("woment").innerHTML += demo;
        }
    }