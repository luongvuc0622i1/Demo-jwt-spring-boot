function login() {
    //chan su kien mac dinh
    event.preventDefault();
    //lay du lieu
    let username = $("#username").val();
    let password = $("#password").val();
    //tao object
    let user = {"name":username,"password":password};

    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/login",
        data: JSON.stringify(user),
        success: checkLogin
    })

    function checkLogin(data) {
        localStorage.setItem("object", JSON.stringify(data));
        window.location.href = "../demoJwt/admin.html";
    }
}