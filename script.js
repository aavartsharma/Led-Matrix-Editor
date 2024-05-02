let moduleNumber = 4;
let colorOfButton;
let colorNumber = 10;
let MainDict = {}; // for storing the state of the each pixel in the editor
let buttonIDCounter = 1;

let MaindivList = document.createElement("div");
MaindivList.id = "MainDivList";
let MainListContainer = document.getElementById("mainListColumn");
MainListContainer.appendChild(MaindivList);

for (let i = 0; i < moduleNumber; i++) 
{
  let DisplayString = "display-" + String(i + 1); 
  let moduleDiv = document.createElement("div");
  moduleDiv.classList.add("displayclass");
  moduleDiv.id = DisplayString;
  let container = document.getElementById("displaygrid");
  container.appendChild(moduleDiv);

  //for dict
  MainDict[DisplayString] = {};

  // for Displaying the list
  let ListOnDisplay = "{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00}";
  let divDisplayer = document.createElement("div");
  divDisplayer.id = "List" + String(i);
  divDisplayer.classList.add("arrayPrint");
  let prentDiv = document.getElementById("ontextColumn");
  divDisplayer.textContent = ListOnDisplay;
  // MaindivList.textContent = "{"+MainList+"}"; // work here
  MaindivList.textContent = "{" + ListOnDisplay+ "," + ListOnDisplay + "," + ListOnDisplay + "," + ListOnDisplay + "}";
  prentDiv.appendChild(divDisplayer);
  for (let k = 0; k < 8; k++) 
  {
    let div = document.createElement("div");
    div.classList.add("checkkkk");
    // MainDict[DisplayString][rowID] = {};
    for (let j = 0; j < 8; j++) 
    {
      // Create a span element
      let span = document.createElement("span");

      // Create a button element
      let button = document.createElement("button");

      // Add a class to the button
      let ID = "pixel-" + String(buttonIDCounter);
      button.id = ID;
      MainDict[DisplayString][ID] = "0";
      buttonIDCounter++;
      button.classList.add("pixel");

      // MainDict[DisplayString][rowID][ColumnID] = "0";

      // Add event listener to the button for the "click" event
      button.addEventListener("click", () => {
        // Change the background color of the button
        if (window.getComputedStyle(button).backgroundColor != 'rgb(255, 255, 255)') 
        {
          button.style.backgroundColor = "#ffffff"; // change to white
          MainDict[DisplayString][ID] = "0"; 
          let ListOnDisplay = showHexString(MainDict[DisplayString],i);
          let divDisplayer = document.getElementById("List" + String(i)); 
          divDisplayer.textContent = ListOnDisplay;
          MaindivList.textContent = mainStringMaker();
        }
        else if (window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)') 
        {
          if (colorOfButton == null) 
          {
            button.style.backgroundColor = "#0000ff";
          }
          else 
          {
            button.style.backgroundColor = colorOfButton; // Change color to the random Color
          }
          MainDict[DisplayString][ID] = "1";
          let ListOnDisplay = showHexString(MainDict[DisplayString],i);
          let divDisplayer = document.getElementById("List" + String(i));
          divDisplayer.textContent = ListOnDisplay;
          MaindivList.textContent = mainStringMaker();
        }
      });
      span.appendChild(button);
      div.appendChild(span);
    }
    // arrayList.push(innerlist);  work here
    moduleDiv.appendChild(div);
  }
  // BinaryList.push(arrayList);  work here
}

for (let i = 1; i <= moduleNumber * 4; i++) // for side counting bar
{
  let div = document.createElement("div");
  div.classList.add("numberclass");
  div.textContent = i;
  let container = document.getElementById("linecount");
  container.appendChild(div);
}

for (let i = 0; i < colorNumber; i++) {
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

for (let i = 0; i < moduleNumber; i++) // buttons
{
  let buttons = document.createElement("button");
  let DisplayString = "display-" + String(i + 1); 
  buttons.textContent = "Screen On/Off " + String(i + 1);
  buttons.classList.add("controlButtons");
  let div = document.createElement("div");
  div.appendChild(buttons);
  div.id = "buttonArea" + String(i);
  div.classList.add("ControlButton");
  let preantDiv = document.getElementById("controlBox");
  let displayer = document.getElementById("MainDivList");
  buttons.addEventListener("click", () => {
    let displayList = document.getElementById("List" + String(i));
    for (let key in MainDict[DisplayString])
    {
      let button = document.getElementById(key);
      if (window.getComputedStyle(button).backgroundColor != 'rgb(255, 255, 255)')  // if on
      {
        button.style.backgroundColor = "#ffffff";
        MainDict[DisplayString][key] = "0";
      }
      else if (window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)') // if off
      {
        if (colorOfButton == null) 
        {
          button.style.backgroundColor = "#0000ff";
        }
        else 
        {
          button.style.backgroundColor = colorOfButton;
        }
        MainDict[DisplayString][key] = "1";
        
      }
      let ListOnDisplay = showHexString(MainDict[DisplayString],i);
      displayList.textContent = ListOnDisplay; 
      displayer.textContent = mainStringMaker();
    }
  });
  preantDiv.appendChild(div);
}


// function code 
function showHexString(Dict,display) // display is string
{
  return makeHexString(makeHexStringFromDict(Dict,display));
}
function mainStringMaker()
{
  let mainstring = "{";
  for(let i = 0; i < 4; i++)
  {
    if( i == 3)
    {
      mainstring += document.getElementById("List" + String(i)).textContent + "}";
      break;
    }
    mainstring += document.getElementById("List" + String(i)).textContent + ",";
  }

  return mainstring;
}
function makeHexString(List) 
{
  let Astring = "{";
  List.forEach(bit => {
    let ff = bit;
    let extra = "0x";
    let len = List.length;
    if (ff.length < 2) 
    {
      extra = "0x0";

    }
    Astring += extra + ff + ",";
  });
  let ReturningString = Astring.slice(0,-1);
  ReturningString += "}";
  return ReturningString;
}

function makeHexStringFromDict(Dict,display) /* first find the  */
{                /*  */
  let arraryOfhex = [];
  let BinaryString = "";
  for(let i = 1+(64*display); i < 64*(1+display)+1; i++)
  {
    BinaryString += Dict["pixel-"+ String(i)]; // herer
    if(i % 8 == 0)
    {
      if(i != 1+(63*display)) /// checking if it is not the starting of the loop
      {
        arraryOfhex.push(binaryToHex(BinaryString));
        if(i == 64*(1+display)+1)
        {
          break;
        }
      }
      BinaryString ="";  
    }
  }
  // arraryOfhex.push(binaryToHex(BinaryString));
  return arraryOfhex;
}



function BinaryListToHex(List) 
{
  let string = "";
  List.forEach(bit => {
    string += bit;
  });
  let hexaNumber = binaryToHex(string);
  return hexaNumber;
}

function BinaryListToHexSndreturnsalist(List) 
{
  let bitString = "";
  List.forEach(bit => {
    bitString += bit;
  });
  let hexaNumber = binaryToHex(bitString);
  return hexaNumber;

}

function binaryToHex(binary) 
{
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

function getRandomInt(min, max) 
{
  // Generate a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

