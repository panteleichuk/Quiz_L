let signInBtnLink = document.querySelector(".signInBtn-link")
let signUpBtnLink = document.querySelector(".signUpBtn-link")
let wrapper = document.querySelector('.wrapper')
let login = document.querySelector(".login")
let main_Win = document.querySelector(".main_window")
let user_login = document.getElementById("user_login")
let sign_up = document.querySelector(".sign_up")

sign_up.addEventListener("click",()=>{
    create_user()
    
})

user_login.addEventListener("click",()=>{
    if(user_login.innerHTML == 'Login'){
        document.querySelector(".main_window").style.display = 'none'
        document.querySelector(".login-window").style.display = "flex"
      
    }
})


login.addEventListener("click",function(event){
    
    check_user()
    // document.querySelector(".main_window").style.display = 'flex'
    // document.querySelector(".login-window").style.display = 'none'
    //                 user_login.innerHTML = "rrrr"
        
   
})

signUpBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active')
})

signInBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});

function read_cooki(){
    var users 
    users = document.cookie
    // розбиває список по ;
    users = users.split(";")
    
    var arr = []
    for(let i = 0;i<users.length;i++){
        if(users[i].includes('user') && !(users[i].includes('count'))){
            arr.push(users[i])
            
        }
       
    }
    users = arr
    // console.log(users)
    for(let i = 0;i<users.length;i++){
        users[i].replace(" ", "")
        users[i] = users[i].split('//')
    }
    return users
} 

 function check_user(){
    let users = read_cooki()
    // alert(users)
    if(users != ""){
    let users_name 
    let users_pass
    let name = document.querySelector(".name_log").value
    let pass = document.querySelector(".pass_log").value
    let count = 0
        

    if(name == "" || pass == ""){
        alert("Введіть пароль або їм'я")
    }else{
        
        for (let i = 0;i<users.length;i++){
            // alert(users)
            users_name = users[i][0].split('=')[1]
            users_pass = users[i][1].split('=')[1]
            // alert(users_name)
            if(name == users_name){
                count = 1
                if(pass == users_pass){

                    alert("Ви залогінились")
                    
                    user_login.innerHTML = name
                    document.querySelector(".main_window").style.display = 'flex'
                    document.querySelector(".login-window").style.display = 'none'
                    
                   break

                }else{
                    alert("Невірний пароль")
                }
            }
                
            
        }
        if(count == 0){
            alert("Такого користувача не має")
        }
    }
}else{
    alert("Такого користувача не має")
}

}

function create_user(){
    var users = read_cooki()
    // alert(users)
    var find_user
    var users_name 
    var users_pass
    var name = document.querySelector(".new_name").value
    var pass = document.querySelector(".new_password").value
    var count = users.length
        

    if(name == "" || pass == ""){
        alert("Введіть пароль або їм'я")
    }else{
        
        for (let i = 0;i<users.length;i++){
            // alert(users)
            users_name = users[i][0].split('=')[1]
            users_pass = users[i][1].split('=')[1]
            // alert(users_name)
            if(name == users_name){
                find_user = 1
            }
     
        }
        if(find_user == 1){
            alert("Такий користувач вже існує")
        }else{
            count += 1
            document.cookie=`user${count}=${name}//pass=${pass};max-age=60*60*24*7`
            alert("Вітаю! Ви зарегетсрувались!")
            user_login.innerHTML = name
            document.querySelector(".main_window").style.display = 'flex'
            document.querySelector(".login-window").style.display = 'none'

        }
    }
}






// // let users = document.cookie
// // document.cookie="user0=Alex//pass=1234;max-age=60*60*24*7"
// // document.cookie="user1=Bob//pass=1;max-age=60*60*24*7"
// document.cookie="count_user=2;max-age=0"
// document.cookie="count=4;max-age=0"











