function changeColor(){
        let color=document.getElementById("enterColor").value.trim();
        let box=document.getElementById("divText");

        // create test box beacuse if tester pass then only we will apply css
        let tester=document.createElement("div")
        tester.style.color=color;
        if(tester.style.color===''){
            alert("Invalid color name !");
            return
        }

        // if test pass then change backgriound color
        box.style.backgroundColor=color;

    }

    function updateText(){
        let text=document.getElementById("textcontent").value.trim();
        let box=document.getElementById("divText")

        if(text===""){
            alert("Please enter some text !");
            return;
        }
        box.textContent=text
    }