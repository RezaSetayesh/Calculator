const previous = document.getElementById("previous")
        const newest = document.getElementById("newest")
        // add numbers by clicking buttons
        const numbers = document.getElementsByClassName("number")
        for(const number of numbers){
            number.onclick = function(){
                if(isEqual){return}
                if(newest.innerText.length == 20){return}
                newest.innerText += number.innerText
            }
        }
        // clear button
        const clear = document.getElementById("clear")
        clear.onclick = function(){
            previous.innerText = ""
            newest.innerText = ""
            isOprator = false
            isEqual = false
        }
        // del button
        const del = document.getElementById("delete")
        del.onclick = function(){
            if(isEqual){return}
            newest.innerText = newest.innerText.slice(0,newest.innerText.length - 1)
        }
        // dot button
        const dot = document.getElementById("dot")
        dot.onclick = function(){
            if(newest.innerText.indexOf(".") != -1){return}
            if(isEqual){return}
            newest.innerText += "."
        }
        // oprator buttons
        const oprators = document.getElementsByClassName("oprator")
        let isOprator = false
        for(const oprator of oprators){
            oprator.onclick = function(){
                if(isOprator){return}
                if(newest.innerText == ""){return}
                isOprator= true
                isEqual = false
                previous.innerText = newest.innerText + oprator.innerText
                newest.innerText = ""
            }
        }
        // sqrt button
        const sqrt = document.getElementById("sqrt")
        sqrt.onclick = function(){
            if(newest.innerText == ""){return}
            previous.innerText = `sqrt(${newest.innerText})`
            solve = Math.sqrt(parseFloat(newest.innerText))
            newest.innerText = solve
            isEqual = true

            const historyBox = document.createElement("div")
            historyBox.className = "history-box"
            const numbers = document.createElement("p")
            numbers.className = "numbers"
            numbers.innerText = previous.innerText
            const answer = document.createElement("p")
            answer.className = "answer"
            answer.innerText = solve
            historyBox.appendChild(numbers)
            historyBox.appendChild(answer)
            history.appendChild(historyBox)
            history.scrollBy(0,5000)
        }
        // equal buttton
        const equal = document.getElementById("equal")
        const history = document.getElementById("history")
        let isEqual = false
        equal.onclick = function(){
            if(!isOprator){return}
            if(newest.innerText == ""){return}
            if(isEqual){return}
            
            let solve;
            if(previous.innerText.charAt(previous.innerText.length - 1) == "+"){
                solve = parseFloat(previous.innerText.slice(0,previous.innerText.length - 1)) + parseFloat(newest.innerText)
                previous.innerText += newest.innerText + "="
                newest.innerText = solve
            }
            if(previous.innerText.charAt(previous.innerText.length - 1) == "-"){
                solve = parseFloat(previous.innerText.slice(0,previous.innerText.length - 1)) - parseFloat(newest.innerText)
                previous.innerText += newest.innerText + "="
                newest.innerText = solve
            }
            if(previous.innerText.charAt(previous.innerText.length - 1) == "*"){
                solve = parseFloat(previous.innerText.slice(0,previous.innerText.length - 1)) * parseFloat(newest.innerText)
                previous.innerText += newest.innerText + "="
                newest.innerText = solve
            }
            if(previous.innerText.charAt(previous.innerText.length - 1) == "/"){
                solve = parseFloat(previous.innerText.slice(0,previous.innerText.length - 1)) / parseFloat(newest.innerText)
                previous.innerText += newest.innerText + "="
                newest.innerText = solve
            }

            const historyBox = document.createElement("div")
            historyBox.className = "history-box"
            const numbers = document.createElement("p")
            numbers.className = "numbers"
            numbers.innerText = previous.innerText
            const answer = document.createElement("p")
            answer.className = "answer"
            answer.innerText = solve
            historyBox.appendChild(numbers)
            historyBox.appendChild(answer)
            history.appendChild(historyBox)
            history.scrollBy(0,5000)
            isOprator = false
            isEqual = true
            
        }
