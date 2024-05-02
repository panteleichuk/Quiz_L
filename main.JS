import { randint, shuffle, Qustion } from "./scripts.js"





let div_answers = document.querySelector(".answers")
let answers_arr = div_answers.querySelectorAll("div")
let count_qw = 0





let fluck = true
let qws = new Qustion()
qws.display()
for(let ans of answers_arr){
    ans.addEventListener("click",function(){
        if (fluck){
            fluck = false
        if(+this.innerHTML == qws.correct){
            qws.correct_count += 1
            this.style.background = "#00ff00"
        }else{
            this.style.background = "#ff0000"
        }
        anime({
            targets:ans,
            background:"rgb(29, 125, 29)",
            delay:100,
            duration:500
        }).finished.then(function(){
            qws.display()
            fluck = true
        })
       
    }})
    
}

function create_result(){
    let h2 = document.createElement("h2")
    h2.className = "res"
    h2.innerHTML = `Всього питань ${qws.count}`
    h2.appendChild = div_finish.appendChild(h2)

    let h3 = document.createElement("h2")
    h3.className = "res"
    h3.innerHTML = `Всього правильних відповідей ${qws.correct_count}`
    h3.appendChild = div_finish.appendChild(h3)

    let h4 = document.createElement("h2")
    h4.className = "res"
    h4.innerHTML = `Кофіцієнт успішності ${qws.correct_count/qws.count*100}%`
    h4.appendChild = div_finish.appendChild(h4)
}


/*Логіка перемикання вікон*/
let div_start = document.querySelector('.start')
let div_finish = document.querySelector('.finish')
let div_test = document.querySelector('.card_qw')
let btn_start = document.querySelector(".btn_start")

btn_start.addEventListener("click",()=>{
    div_start.style.display = "none"
    div_finish.style.delay = "none"
    div_test.style.display = "flex"
})
    setTimeout(()=>{
        div_test.style.display = "none"
        create_result()
        div_finish.style.display = "flex"
    },10000);

// Кінець Логіка перемикання вікон
