const container = document.querySelector('.container');
const btn=document.querySelector('.btn');
const buttons = document.querySelectorAll('button');
setUpGrids(10);
hoveron();

function hideButtons(op) {
    buttons.forEach((button) => {
      button.style.display = op;
    });
}


function retrieveText() {
    var itemText = document.getElementById("item").value;
    return itemText;
}

document.getElementById("reset").onclick=function()
{
    while(container.hasChildNodes() ){
        container.removeChild(container.lastChild);
    }
    setUpGrids(10);
    hoveron();
}

document.getElementById("g-num").onclick = function() {

    hideButtons('none')
    
    var label = document.createElement("label");
    label.setAttribute("for","item");
    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","item");
    input.setAttribute("placeholder","Enter Grid Size");
    var sizebtn = document.createElement("button");
    sizebtn.className="sizebtn";
    sizebtn.textContent="Submit";
    sizebtn.onclick = function() {
        var enteredText = retrieveText();
        while(container.hasChildNodes() ){
            container.removeChild(container.lastChild);
        }
        setUpGrids(enteredText);
        hoveron();
        hideButtons('block');
        btn.removeChild(label);
        btn.removeChild(input);
        btn.removeChild(sizebtn);
    };
    btn.appendChild(label);
    btn.appendChild(input);
    btn.appendChild(sizebtn);

    document.getElementById("item").value = ""; // Clear the input field after adding the item

};

function setUpGrids(size) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const div = document.createElement('div');
        div.setAttribute(`style`, `height: calc(100%/${size})`);
        div.setAttribute(`style`, `width: calc(100%/${size}`);
        container.appendChild(div);
      }   
    }
}


function hoveron()
{
    let items = document.querySelectorAll('.container>div');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
      });
    });
}