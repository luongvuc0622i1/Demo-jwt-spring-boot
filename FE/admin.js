let object = localStorage.getItem("object");
let token = "";
console.log(object);
if (object == null){
    window.location.href = "../demoJwt/login.html"
} else {
    console.log("login done");
    // get token
    let ob = JSON.parse(object);
    token = ob.accessToken;
    console.log(token);
    roles = ob.roles;
    console.log(roles);
    authority = roles.authority;
    console.log(authority);
}