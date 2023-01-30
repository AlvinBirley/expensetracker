const greyName = document.querySelector('#greyContainer');



document.getElementById('press').onclick = function(e){
    let everything = document.createElement('div');
    everything.style.width = "880px";
    everything.classList.add('greyClass');
    greyName.appendChild(everything);
    let nameValue = document.getElementById("val").value;
    let contentName = document.createElement('div');
    contentName.style.width = "327.5px";
    contentName.style.border = "1px solid #d3d3d3";
    contentName.textContent = nameValue;
    //contentName.textContent = nameValue;
    everything.appendChild(contentName);
    let contentDate = document.createElement('div');
    let dateValue = document.getElementById("val2").value;
    contentDate.style.width = "327.5px";
    contentDate.style.border = "1px solid #d3d3d3"
    contentDate.innerHTML += 'Hello, I am Arun';
    contentDate.textContent = dateValue;
    everything.appendChild(contentDate);
    
    let contentAmount = document.createElement('div');
    let amountValue = document.getElementById("val3").value;
    contentAmount.style.width = "200px";
    contentAmount.style.border = "1px solid #d3d3d3"
    contentAmount.textContent = "$" + amountValue;


    if (!amountValue.includes(".")){
        contentAmount.textContent = "$" + amountValue + ".00";
    }
    everything.appendChild(contentAmount);
    let clearBtn = document.createElement("button");
    clearBtn .className ="clear"
    clearBtn .style.border = "1px solid #d3d3d3"
    clearBtn .innerHTML = "X";
    everything.appendChild(clearBtn);
    function clearDiv() {
        everything.innerHTML ="";

   }
    clearBtn.onclick=clearDiv;
}

function toggleButton()
{
    let username = document.getElementById('val').value;
    let password = document.getElementById('val2').value;
    let amountpart = document.getElementById('val3').value;

    if (username && password && amountpart) {
        document.getElementById('press').disabled = false;
    } else {
        document.getElementById('press').disabled = true;
    }
}

document.getElementById('pressTwo').onclick = function(e){

document.getElementById('val').value = "";
document.getElementById('val2').value = "";
document.getElementById('val3').value = "";

toggleButton();


}



document.addEventListener("click", (evt) => {
    const containerId = document.getElementById("container");
    const containerIdtwo = document.getElementById("val3");
    const submitIdthree = document.getElementById("buttundiv");
    let targetElement = evt.target; // clicked element    
    if ((document.getElementById('val').value != "") &&
    (document.getElementById('val2').value != "") &&
    (document.getElementById('val3').value != "") && (targetElement !== containerIdtwo)) {
        document.getElementById('press').disabled = false;
        console.log("Hi");
    }})

    function comeOn (){
        if ((document.getElementById('val').value != "") &&
        (document.getElementById('val2').value != "") && (document.getElementById('val3').value != "")) {
            document.getElementById('press').disabled = false;
        }
    }

    