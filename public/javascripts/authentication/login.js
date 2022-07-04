async function loginPlayer() {
    try {
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        
        var encryptPass = CryptoJS.AES.encrypt(password,"I love javascript");
        
        let result = await login(name, encryptPass);
        if (result.logged) {
            window.location = "rooms.html"
        } else {
            document.getElementById("result").innerHTML = "Incorrect username or password";
        }
    } catch (err) {
        console.log(err)
    }
}
