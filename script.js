let moduleNumber = 4; 
let colorOfButton; 
let colorNumber = 10;
let BinaryList = [];
//console.log(parseInt(11, 2));

for (let i = 0; i < moduleNumber; i++) 
{
  // console.log(BinaryList);
  let moduleDiv = document.createElement("div");
  moduleDiv.classList.add("displayclass");
  moduleDiv.id = "display"+String(i+1);
  let container = document.getElementById("displaygrid");
  container.appendChild(moduleDiv);
  let arrayList = [];
  for(let k =0;k < 8;k++)
  {
    let div = document.createElement("div");
    div.classList.add("checkkkk");
    let innerlist = [];
    for (let j = 0; j < 8; j++) 
    {
      // Create a span element
      let span = document.createElement("span");
      
      // Create a button element
      let button = document.createElement("button");
      
      // Add a class to the button
      button.classList.add("pixel");
      // Add event listener to the button for the "click" event
      innerlist[j] = "0";
      button.addEventListener("click", () => {
        // Change the background color of the button
        if (window.getComputedStyle(button).backgroundColor != 'rgb(255, 255, 255)') 
        {
          button.style.backgroundColor = "#ffffff"; // change to white
          BinaryList[i][k][j] = "0";
          
        }
        else if (window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)')
        {
          if(colorOfButton == null)
          {
            button.style.backgroundColor = "#0000ff";
          }
          else
          {
            button.style.backgroundColor = colorOfButton; // Change color to the random Color
          }
          BinaryList[i][k][j] = "1";
          let fffff= makeHexString(BinaryList[i]);
          let divDisplayer = document.createElement("div");
          let prentDiv = document.getElementById("DisplayContainer");
          divDisplayer.textContent = fffff;
          prentDiv.appendChild(divDisplayer);
        }
      });
      span.appendChild(button);
      div.appendChild(span);
    }
    arrayList.push(innerlist);
    moduleDiv.appendChild(div);
  }
  BinaryList.push(arrayList);
  
}

for(let i = 1; i <= moduleNumber*4;i++) // for side counting bar
{
  let div = document.createElement("div");
  div.classList.add("numberclass");
  div.textContent = i;
  let container = document.getElementById("linecount");
  container.appendChild(div);

}

for (let i = 1; i <= colorNumber;i++)
{
  let button = document.createElement("button"); //colorButtons
  button.textContent = "Change";
  let randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
  button.addEventListener("click", () => {
    colorOfButton = randomColor;
  });
  let div = document.createElement("div");
  div.classList.add("colorButton");
  div.appendChild(button);
  let container = document.getElementById("colorButtons");
  container.appendChild(div);

}

function makeHexString(List)
{
  let Astring = "";
  List.forEach(bit => {
    let ff = BinaryListToHex(bit);
    let extra = "0x";
    if(ff < 10)
    {
      extra = "0x0";
    }
    Astring += extra + ff+",";
  });
  return Astring;
}



function BinaryListToHex(List)
{
  let string = "";
  List.forEach(bit=> {
    string += bit;
  });
  let hexaNumber = binaryToHex(string);
  return hexaNumber;

}

function binaryToHex(binary) {
  // Convert binary to decimal
  let decimal = parseInt(binary, 2);
  
  // Convert decimal to hexadecimal
  let hexadecimal = decimal.toString(16);
  return hexadecimal;
}

function getRandomColor() 
{
  // Generate random values for red, green, and blue components
  let red = Math.floor(Math.random() * 256); // Random value between 0 and 255
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  // Convert values to hexadecimal strings
  let redHex = red.toString(16).padStart(2, '0'); // Convert to hexadecimal and pad with leading zero if necessary
  let greenHex = green.toString(16).padStart(2, '0');
  let blueHex = blue.toString(16).padStart(2, '0');

  //Concatenate components and return the color string
  let color = '#' + redHex + greenHex + blueHex;
  return color;
}

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}







