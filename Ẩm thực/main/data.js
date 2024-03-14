var monan=[
    {
        id:1,
        Name:"Bún đậu mắn tôm" ,
        img:"https://th.bing.com/th/id/OIP.gMA6RTJSsuRNg_kqQOXElwHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
        Price:"60.000",
        Location: "Hà Nội",
        detail: "Bún đậu mắm tôm là món ăn đơn giản, dân dã trong ẩm thực miền Bắc Việt Nam và có xuất xứ từ Hà Nội. Đây là món thường được dùng như bữa ăn nhẹ, ăn chơi. Thành phần chính gồm có bún tươi, đậu hũ chiên vàng, chả cốm, thịt luộc, nem chua,dồi chó, mắm tôm pha chanh, ớt và ăn kèm với các loại rau thơm như tía tô, kinh giới, rau húng, xà lách, cà pháo...[1] Cũng như các món ăn dân gian khác, giá thành rẻ nên được nhiều người giới bình dân ăn nên thu nhập của những người buôn bán những món ăn này khá cao.[2]"
    },
    {
        id:2,
        Name:"Mì Quảng" ,
        img:"https://th.bing.com/th/id/R.6dad402ae6f590ab336d2735b54fb97a?rik=fHsxtlhEevL2JQ&pid=ImgRaw&r=0",
        Price:"40.000",
        Location: "Quảng Nam",
        detail: "Mì Quảng (tức là Mì của xứ Quảng) là một món ăn có nguồn gốc xuất xứ và cũng là đặc sản của tỉnh Quảng Nam và thành phố Đà Nẵng tại Việt Nam. Mì Quảng thường được làm từ bột gạo xay mịn với nước từ hạt dành dành và trứng cho có màu vàng và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 5 -10mm"
    },
    {
        id:3,
        Name:"Bún Bò Huế",
        img:"https://th.bing.com/th/id/OIP.bKL8VwjNzCOx4r82xhdRKAHaF7?rs=1&pid=ImgDetMain",
        Price: "50.000",
        Location: "Huế",
        detail: "Bún bò Huế là một trong những đặc sản của tỉnh Thừa Thiên Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Tại Thừa Thiên Huế, món này được gọi đơn giản là  bún bò hoặc gọi cụ thể hơn là bún bò thịt bò"
    },
    {
        id:4,
        Name:"Cơm hến" ,
        img:"https://www.disneycooking.com/wp-content/uploads/2020/11/com-hen-hue.jpg",
        Price:"30.000",
        Location: "Huế",
        detail: "Cơm hến là một đặc sản ẩm thực Huế[1][2]. Cơm hến được trình bày dưới hình thức là cơm nguội trộn với hến xào qua dầu và gia vị, nước hến, mắm ruốc, môn bạc hà, bẹ chuối, rau má, rau thơm, giá đỗ, tóp mỡ hoặc bóng bì chiên giòn, sợi mì chiên giòn, ớt màu, đậu phộng nguyên hạt, ớt chưng, tiêu, bột ngọt và muối. Các món cải biên như bún hến và mì hến không phải là đặc sản Huế."

    }

]
function Scroll(){
    var Tager = document.getElementById("tager")
    Tager.scrollIntoView({behavior: 'smooth'})
}


function back(){
    var Detail = document.getElementById("Detail")
    var trangchu = document.getElementById("trangchu")
    Detail.style.height = "0"
    trangchu.style.height = "auto"
    Detail.innerHTML = ''
}
function show_input_add(){
    var input_add = document.getElementById("input_add")
    var button = document.getElementById("button_click")
    button.style.opacity = '0'
    input_add.style.maxHeight = "100vh"
}
function Close(){
    var input_add = document.getElementById("input_add")
    var button = document.getElementById("button_click")
    button.style.opacity = '1'
    input_add.style.maxHeight = "0"
}

function back_messenger(){
    var messenger = document.getElementById("messenger")
    messenger.style.height = '0'

    // var messenger = document.getElementById("messenger")
    // messenger.style.height = '100vh'
}

function Load_view(){
    var show = ``
    for(var i = 0; i < monan.length; i++){
         show += `<div id="${monan[i].id}" class="card" style="width: 18rem;">
        <img style="width: 100%; height: 60%" src="${monan[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${monan[i].Name}</h5>
          <p class="card-text"><b>Giá thực tế: </b>${monan[i].Price}đ</p>
          <button onclick="Detail_product(${monan[i].id})" class="btn btn-primary">Chi tiết</button>
        </div>
      </div>`

      
    }
    document.getElementById("View").innerHTML = show

    var buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var id = this.parentElement.parentElement.id;
            Detail_product(id);
        });
    });
}
function Detail_product(id){
    var Detail = document.getElementById("Detail")
    var trangchu = document.getElementById("trangchu")
    Detail.style.height = "100vh"
    trangchu.style.height = "0"

    monan.forEach(function(id_data){
        if(id === id_data.id){
           var show_detail = `<div class="detail_img w-50 ms-3">
           <img class="w-100" src="${id_data.img}" alt="">
           </div>
           <div class="detail_text w-50">
             <h1 class="fw-bold">${id_data.Name}</h1>
             <p class="fs-5 mt-3"><b>Giá thực tế: </b>${id_data.Price}đ</p>
             <p class="fs-5"><b>Địa điểm: ${id_data.Location}</b> </p>
             <p class="fs-5"><b>Mô tả:</b> ${id_data.detail} </p>
             <button type="button" onclick="back()" class="btn btn-secondary">Quay về</button>
           </div>`
           document.getElementById("Detail").innerHTML = show_detail
        }
        
    })
}

function Search(value_search){
    if(value_search == ''){
    var messenger = document.getElementById("messenger")
    messenger.style.height = '100vh'
    }else{
        for(var i = 0; i < monan.length; i++){
            if(value_search.toLowerCase() == monan[i].Name.toLowerCase()){
                var show = `<div id="${monan[i].id}" class="card" style="width: 18rem;">
                <img style="width: 100%; height: 60%" src="${monan[i].img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${monan[i].Name}</h5>
                  <p class="card-text"><b>Giá thực tế: </b>${monan[i].Price}đ</p>
                  <button onclick="Detail_product(${monan[i].id})" class="btn btn-primary">Chi tiết</button>
                </div>
              </div>`
        
              document.getElementById("View").innerHTML = show
              return
            }else{
                document.getElementById("View").innerHTML = "Hiện tại món bạn cần tìm chưa có!"
            }
           
        }
    }
    
}

function Add_mon(Id_mon,Ten_mon,Anh_mon,Gia_mon,Diadiem_mon,Mota_mon){
    console.log(Id_mon,Ten_mon,Anh_mon,Gia_mon,Diadiem_mon,Mota_mon)
    if(Id_mon == ''&&Ten_mon == ''&& Anh_mon == ''&&Gia_mon==''&&Diadiem_mon == '' && Mota_mon == ''){
        var messenger = document.getElementById("messenger")
        var text_messenger = document.getElementById("text_messenger")
    }else{
        var Mon = {
            id: Id_mon,
            Name: Ten_mon,
            img: Anh_mon,
            Price: Gia_mon,
            Location: Diadiem_mon,
            detail: Mota_mon
        }
        monan.push(Mon)
        var messenger = document.getElementById("messenger")
        var text_messenger = document.getElementById("text_messenger")
        messenger.style.height = '100vh'
        text_messenger.innerHTML = 'Thêm món thành công'
        Load_view()
    }
    
}