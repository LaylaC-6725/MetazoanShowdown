async function loginPlayer() {
    try {
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        
        var encryptPass = CryptoJS.SHA3(password);
        
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
