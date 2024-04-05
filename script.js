

for (let i = 1; i <= 8; i++) 
{
    let div1 = document.createElement("div");
    div1.classList.add("checkkkk");
    for (let j = 1; j <= 8; j++) 
    {
        // Create a span element
        let span = document.createElement("span");

        // Create a button element
        let button = document.createElement("button");

        // Add a class to the button
        button.classList.add("pixel");

        // Add event listener to the button for the "click" event
        button.addEventListener("click", () => {
          // Change the background color of the button
          if(window.getComputedStyle(button).backgroundColor == 'rgb(0, 0, 255)')
          {
            button.style.backgroundColor = "#ffffff"; // change to white
          }
          else if(window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)')
          {
            button.style.backgroundColor = "#0000ff"; // Change color to red
          }
          console.log(window.getComputedStyle(button).backgroundColor); // get the backgroundcolor
        });
        // Append the button to the span
        span.appendChild(button);
        div1.appendChild(span);
    }

    let container1 = document.getElementById("display1");
    container1.appendChild(div1);

    let div2 = document.createElement("div");
    div2.classList.add("checkkkk");

    for (let j = 1; j <= 8; j++) 
    {
        // Create a span element
        let span = document.createElement("span");

        // Create a button element
        let button = document.createElement("button");

        // Add a class to the button
        button.classList.add("pixel");
        button.id = "pixel-" + String(j);

        // Add event listener to the button for the "click" event
        button.addEventListener("click", () => {
          // Change the background color of the button
          if(window.getComputedStyle(button).backgroundColor == 'rgb(0, 0, 255)')
          {
            button.style.backgroundColor = "#ffffff";
          }
          else if(window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)')
          {
            button.style.backgroundColor = "#0000ff"; // Change color to red
          }
          console.log(window.getComputedStyle(button).backgroundColor);
        });
        // Append the button to the span
        span.appendChild(button);
        div2.appendChild(span);
    }

    let container2 = document.getElementById("display2");
    container2.appendChild(div2);

    let div3 = document.createElement("div");
    div3.classList.add("checkkkk");

    for (let j = 1; j <= 8; j++) 
    {
        // Create a span element
        let span = document.createElement("span");

        // Create a button element
        let button = document.createElement("button");

        // Add a class to the button
        button.classList.add("pixel");
        button.id = "pixel-" + String(j);

        // Add event listener to the button for the "click" event
        button.addEventListener("click", () => {
          // Change the background color of the button
          if(window.getComputedStyle(button).backgroundColor == 'rgb(0, 0, 255)')
          {
            button.style.backgroundColor = "#ffffff";
          }
          else if(window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)')
          {
            button.style.backgroundColor = "#0000ff"; // Change color to red
          }
          console.log(window.getComputedStyle(button).backgroundColor);
        });
        // Append the button to the span
        span.appendChild(button);
        div3.appendChild(span);
    }

    let container3 = document.getElementById("display3");
    container3.appendChild(div3);

    let div4 = document.createElement("div");
    div4.classList.add("checkkkk");

    for (let j = 1; j <= 8; j++) 
    {
        // Create a span element
        let span = document.createElement("span");

        // Create a button element
        let button = document.createElement("button");

        // Add a class to the button
        button.classList.add("pixel");
        button.id = "pixel-" + String(j);

        // Add event listener to the button for the "click" event
        button.addEventListener("click", () => {
          // Change the background color of the button
          if(window.getComputedStyle(button).backgroundColor == 'rgb(0, 0, 255)')
          {
            button.style.backgroundColor = "#ffffff";
          }
          else if(window.getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)')
          {
            button.style.backgroundColor = "#0000ff"; // Change color to red
          }
          console.log(window.getComputedStyle(button).backgroundColor);
        });
        // Append the button to the span
        span.appendChild(button);
        div4.appendChild(span);
    }

    let container4 = document.getElementById("display4");
    container4.appendChild(div4);
}
