const runButton = document.getElementById("runbutton")
runButton.addEventListener('click',check)

    function check(){
        
        let txtnumber = document.getElementById("txtnumber")

        let select_one = document.getElementById("select_one")
        let select_two = document.getElementById("select_two")
        let select_three = document.getElementById("select_three")
        let select_four = document.getElementById("select_four")

        if(txtnumber.value.length == 0){
            alert(`[ERROR] type any number`)
        }else{
            let num = Number(txtnumber.value)

            select_one.innerHTML = ``
            select_two.innerHTML = ``
            select_three.innerHTML = ``
            select_four.innerHTML = ``

            for(let a = 1; a <= 10; a++){
                let option_one = document.createElement('option')
                option_one.text = `${num} + ${a} = ${num+a}`
                select_one.appendChild(option_one)
            }


            let b = 1
            do{
                
                let option_two = document.createElement('option')
                option_two.text = `${num} - ${b} = ${num-b}`
                select_two.appendChild(option_two)
                b++
            }while(b <= 10)


            let c = 1
            while(c <= 10){
                let option_three = document.createElement('option')
                option_three.text = `${num} * ${c} = ${num*c}`
                select_three.appendChild(option_three)
                c++
            }

            for(let d = 1; d <= 10 ; d++){
                let option_four = document.createElement('option')
                option_four.text = `${num} / ${d} = ${num/d}`
                select_four.appendChild(option_four)
            }
        }
    }