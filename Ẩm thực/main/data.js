var monan=[
    {
        id:1,
        Name:"Bún đậu mắn tôm" ,
        img:"https://th.bing.com/th/id/OIP.gMA6RTJSsuRNg_kqQOXElwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
        Price:"60.000",
        detail: "Bún đậu mắm tôm là món ăn đơn giản, dân dã trong ẩm thực miền Bắc Việt Nam và có xuất xứ từ Hà Nội. Đây là món thường được dùng như bữa ăn nhẹ, ăn chơi. Thành phần chính gồm có bún tươi, đậu hũ chiên vàng, chả cốm, thịt luộc, nem chua,dồi chó, mắm tôm pha chanh, ớt và ăn kèm với các loại rau thơm như tía tô, kinh giới, rau húng, xà lách, cà pháo...[1] Cũng như các món ăn dân gian khác, giá thành rẻ nên được nhiều người giới bình dân ăn nên thu nhập của những người buôn bán những món ăn này khá cao.[2]"
    },
    {
        id:2,
        Name:"Mì Quảng" ,
        img:"https://th.bing.com/th/id/R.6dad402ae6f590ab336d2735b54fb97a?rik=fHsxtlhEevL2JQ&pid=ImgRaw&r=0",
        Price:"40.000",
        detail: "Mì Quảng (tức là Mì của xứ Quảng) là một món ăn có nguồn gốc xuất xứ và cũng là đặc sản của tỉnh Quảng Nam và thành phố Đà Nẵng tại Việt Nam. Mì Quảng thường được làm từ bột gạo xay mịn với nước từ hạt dành dành và trứng cho có màu vàng và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 5 -10mm"
    },
    {
        id:3,
        Name:"Bún Bò Huế",
        img:"https://th.bing.com/th/id/OIP.bKL8VwjNzCOx4r82xhdRKAHaF7?rs=1&pid=ImgDetMain",
        Price: "50.000",
        detail: "Bún bò Huế là một trong những đặc sản của tỉnh Thừa Thiên Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Tại Thừa Thiên Huế, món này được gọi đơn giản là  bún bò hoặc gọi cụ thể hơn là bún bò thịt bò"
    },
    {
        id:4,
        Name:"Cơm hến" ,
        img:"https://www.disneycooking.com/wp-content/uploads/2020/11/com-hen-hue.jpg",
        Price:"30.000",
        detail: "Cơm hến là một đặc sản ẩm thực Huế[1][2]. Cơm hến được trình bày dưới hình thức là cơm nguội trộn với hến xào qua dầu và gia vị, nước hến, mắm ruốc, môn bạc hà, bẹ chuối, rau má, rau thơm, giá đỗ, tóp mỡ hoặc bóng bì chiên giòn, sợi mì chiên giòn, ớt màu, đậu phộng nguyên hạt, ớt chưng, tiêu, bột ngọt và muối. Các món cải biên như bún hến và mì hến không phải là đặc sản Huế."

    }

]

function load(){
    for(i = 0; i < monan.length; i++){
        var demo = `<div class="card mt-3" style="width: 18rem;" id="${monan[i].id}">
        <img src="${monan[i].img}" class="card-img-top" style="height: 250px" alt="...">
        <div class="card-body mt-2">
          <h5 class="card-title">${monan[i].Name}</h5>
          <p class="card-text">${monan[i].Price}</p>
          <button type="button" onclick="view(${monan[i].id})" class="btn btn-primary">Chi tiết</button>
        </div>
      </div>`
    
      document.getElementById("show").innerHTML += demo
    
    }
}

function view(id){
    var detail_view = document.getElementById("detail_view")
    var trangchu_view = document.getElementById("trangchu")
    detail_view.style.maxHeight = "-100px"
    trangchu_view.style.maxHeight = "0"

    for(i = 0; i < monan.length; i++){
        if(monan[i].id === id){
            console.log(monan[i].id)
            var detail = `
            <div class="img">
            <img  style="width: 60%" src="${monan[i].img}" alt="">
        </div>
        <div class="detail_items">
           <p class="fs-1 fw-bold">${monan[i].Name}</p>
           <p class="fs-3">Giá:${monan[i].Price}</p>
           <p class="fs-3">Mô tả:${monan[i].detail}</p>
           <button type="button" onclick="back()" class="btn btn-success">Quay về</button>
        </div>`
        document.getElementById("detail").innerHTML = detail
        return
        }else{
            continue
        }
    }
    
}
function back(){
    var detail_view = document.getElementById("detail_view")
    var trangchu_view = document.getElementById("trangchu")
    detail_view.style.maxHeight = "-100px"
    trangchu_view.style.maxHeight = "100vh"
}
function search(Ip_search) {
    var results = '';
    for (var i = 0; i < monan.length; i++) {
        if (Ip_search === monan[i].Name) {
            results += `<div class="card mt-3" style="width: 18rem;" id="${monan[i].id}">
                            <img src="${monan[i].img}" class="card-img-top" style="height: 250px" alt="...">
                            <div class="card-body mt-2">
                                <h5 class="card-title">${monan[i].Name}</h5>
                                <p class="card-text">${monan[i].Price}</p>
                                <button type="button" onclick="view(${monan[i].id})" class="btn btn-primary">Chi tiết</button>
                            </div>
                        </div>`;
        }
    }
    // Hiển thị tất cả kết quả được tìm thấy
    document.getElementById("show").innerHTML = results;
}
function addToCart(id_sanpham,name_sanpham,price,img,details){
    console.log(id_sanpham,name_sanpham,price,img,details)
    var a = {
        id: id_sanpham,
        Name: name_sanpham ,
        img: img,
        Price: price,
        detail: details
    }

    monan.push(a)
}

