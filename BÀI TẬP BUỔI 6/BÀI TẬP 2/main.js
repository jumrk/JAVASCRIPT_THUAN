var Arr = [
    {
        id: 1,
        User_Name: "Thuan",
        Password: "thuan123"
    },
    {
        id: 2,
        User_Name: "Nhi",
        Password: "nhi123"
    },
    {
        id: 3,
        User_Name: "Nhat",
        Password: "nhat123"
    },
    {
        id: 4,
        User_Name: "Lan",
        Password: "lan123"
    },
    {
        id: 5,
        User_Name: "Mai",
        Password: "mai123"
    },
    {
        id: 6,
        User_Name: "Tring",
        Password: "tring123"
    },
    {
        id: 7,
        User_Name: "Phoutnai",
        Password: "phoutnai123"
    },
]

function Login(User_Name, Password) {
    console.log(User_Name,Password)
    var result = true;
    for(i = 0; i < Arr.length; i++){
        if(User_Name == Arr[i].User_Name){
            if(Password == Arr[i].Password){
                result =  true
                break
            }else{
                result = false
                continue
            } 
        }else{
            result = false
            continue
            
        }
    }
    if(result == true){
        document.write("<b>Trang Chính</b>");
    }else{
        alert("Tên người dùng hoặc mật khẩu không chính xác!")
    }
}
function Clear(){
    document.getElementById("User_Name").value = ''
    document.getElementById("Password").value = ''
}