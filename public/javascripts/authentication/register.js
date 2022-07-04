

async function registerPlayer() {
    
    try {
        
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        
        /*
        let res = await register(name,password);
        alert(res.msg);    
        window.location = "index.html"; 
        */
        
        /*
        let result = await loginName(name);  // Criei em models uma novo models de nome LoginName 
        if (result.logged) {
            alert("The user already exist. Choose another name");  
        } else {
           */
           
           // Verificar tipo de Nome e Password
           let regexName = new RegExp("^(?=.{3,})");
           let regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            
           if (!regexName.test(name)){
             alert("The name is invalid. It must be longer than 3 characters");  
            }else if (!regexPass.test(password)){
                alert("The password is not secure. It must be longer than 8 characters, include a number, an uppercase letter and a lowercase letter");   
            }else{
                
            let encryptPass = CryptoJS.SHA3(password);
            let res = await register(name,encryptPass);
                
            alert(res.msg);    
            window.location = "index.html";  
        
            /*} */
            
        }
        
        
        
        
    } catch (err) {
        console.log(err);
    }
}
