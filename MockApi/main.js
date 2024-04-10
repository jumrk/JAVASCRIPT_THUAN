var Api = 'https://661523042fc47b4cf27e17e6.mockapi.io/web/';
function start(){
    changeApi("Product","GET",null,render)
}
start()

function changeApi(enpoint,method,data,callback){
    var option ={
        method: method,
        headers: {
            "Content-Type": "application/json",
          },
    }
    if(method !== "GET" && data){
        option.body = JSON.stringify(data)
    }
    fetch(Api+enpoint,option)
         .then(function(response){
            return response.json()
         })
         .then(callback)
}
function render(Courses){
    var html = ``
    Courses.map(function(value){
        return html += ` <div class="card" style="width: 18rem;">
        <img src="${value.imageProduct}" class="card-img-top" alt="..." style="height: 200px">
        <div class="card-body">
          <h5 class="card-title">${value.nameProduct}</h5>
          <b>${value.priceProduct}đ</b>
          <p class="card-text">${value.detailProduct}</p>
          <button type="button" onclick="editProduct(${value.id})" class="btn btn-primary">Sửa</button>
          <button type="button" onclick="deleteProduct(${value.id})" class="btn btn-danger">Xóa</button>
        </div>
      </div>     `
    });
    document.getElementById("showCard").innerHTML = html
}

function showElmAdd(){
    var container = document.getElementById("Container")
    container.style.top = "50%"
}
document.getElementById("closeElmAdd").addEventListener("click",()=>{
    var container = document.getElementById("Container")
    container.style.top = "-50%"
})
document.getElementById("closeElmedit").addEventListener("click",()=>{
    var container = document.getElementById("Container2")
    container.style.top = "-50%"
})
function addProduct(nameProduct, priceProduct, detailProduct) {
    var images = document.getElementById("imagesProduct");
    var file = images.files[0];
    if (!file) {
        console.error("No image selected");
        return;
    }
    var filereader = new FileReader();
    filereader.onload = function(event) {
        var value_filereader = event.target.result;
        var product = {
            productName: nameProduct, // Thay đổi tên thành 'productName' để phân biệt với biến 'nameProduct'
            priceProduct: priceProduct,
            imageProduct: value_filereader,
            detailProduct: detailProduct,
        };
        changeApi("Product", "POST", product, start);
    };
    filereader.readAsDataURL(file);
}
function deleteProduct(id){
    changeApi("Product"+"/"+id,"DELETE",null,start)
}
function editProduct(id){
    var container2 = document.getElementById("Container2")
    container2.style.top = "50%"
    changeApi("Product","GET",null,(Courses)=>{
       Courses.forEach((value) => {
        if(id == value.id){
            document.getElementById("nameProductedit").value = value.nameProduct
            document.getElementById("priceProductedit").value = value.priceProduct
            document.getElementById("detailProductedit").value = value.detailProduct
            document.getElementById("id_hidden").value = value.id
           
        }
       });
    })
}
function editInputProduct(nameProductedit,priceProductedit,detailProductedit,id_hidden,imagesProductedit){
    if(imagesProductedit == ''){
        changeApi("Product","GET",null,(Courses)=>{
            Courses.forEach((value)=>{
                if(id_hidden == value.id){
                    var product = {
                        nameProduct: nameProductedit,
                        priceProduct: priceProductedit,
                        imageProduct: value.imageProduct,
                        detailProduct: detailProductedit,
                    }
                    changeApi("Product"+'/'+id_hidden,"PUT",product,start)
                }
            })
        })
    }else{
        var images = document.getElementById("imagesProductedit")
        var file = images.files[0]
        var filereader = new FileReader
        filereader.onload = function(event){
            var value_filereader = event.target.result
            var product = {
                nameProduct: nameProductedit,
                priceProduct: priceProductedit,
                imageProduct: value_filereader,
                detailProduct: detailProductedit,
            }
            changeApi("Product"+'/'+id_hidden,"PUT",product,start)
        }
        filereader.readAsDataURL(file)
    }
}