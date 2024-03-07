var arr = []

function Save(FullName,id_pro,NamePro,quantity,Price){
    console.log(FullName,id_pro,NamePro,quantity,Price)
    var a ={
        FullName: FullName,
        Id_pro: id_pro,
        NamePro: NamePro,
        Quantity: quantity,
        Price: Price
    }
    arr.push(a)
}
function Show(){
    var demo = ''
    for(i = 0; i<arr.length; i++){
        var n = i
        n++
        demo+= '<tr>'
        demo+= '<th scope="row">'+(n)+'</th>'
        demo+= '<td>'+arr[i].FullName+'</td>'
        demo+= '<td>'+arr[i].Id_pro+'</td>'
        demo+= '<td>'+arr[i].Quantity+'</td>'
        demo+= '<td>'+arr[i].Price+'</td>'
        demo+= '<td>'+Number(arr[i].Quantity)*Number(arr[i].Price)+'</td>'
        demo+= '</tr>'
    }
    document.getElementById("result").innerHTML = demo;
}
function Reset() {
     document.getElementById("FullName").value = ''
     document.getElementById("id_pro").value = ''
     document.getElementById("NamePro").value = ''
     document.getElementById("quantity").value = ''
     document.getElementById("Price").value = ''
}