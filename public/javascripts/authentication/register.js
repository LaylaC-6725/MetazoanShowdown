

async function registerPlayer() {
    
    try {
        
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        
       let regexName = new RegExp("^(?=.{3,})");
       let regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

       if (!regexName.test(name)){
           
         alert("The name is invalid. It must be longer than 3 characters");  
           
        }else if (!regexPass.test(password)){
            
            alert("The password is not secure. It must be longer than 8 characters, include a number, an uppercase letter and a lowercase letter"); 
            
        }else{

            alert("1");
            let encryptPass = CryptoJS.SHA3(password);
            alert("2");

            let res = await register(name,encryptPass);

            alert(res.msg);    
            window.location = "index.html";  
        }

    } catch (err) {
        console.log(err);
    }
}
