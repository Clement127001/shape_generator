//function to generate

const generateShape = (n) => {
  const mainElement = document.querySelector(".shape_container");
  //getting color
  const color = document.querySelector("#color").value;
  const radios = document.querySelectorAll(".shape div input");

  for (let i = 1; i <= n; i++) {
    const newElem = document.createElement("div");

    const pElem = document.createElement("p");
    pElem.innerText = i;

    radios.forEach((radio) => {
      console.log();
      if (radio.checked) {
        // for circle
        if (radio.name == "circle") {
          newElem.setAttribute(
            "style",
            `height:50px; 
             width:50px;
             border-radius:50%;
            background-color:${color};
             display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;`
          );

          pElem.setAttribute("style", "color:white");
          newElem.append(pElem);
        }

        //for rect
        else if (radio.name == "rect") {
          newElem.setAttribute(
            "style",
            `height:50px; 
             width:100px;
            background-color:${color};
             display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;`
          );

          pElem.setAttribute("style", "color:white");
          newElem.append(pElem);
        } else if (radio.name == "square") {
          newElem.setAttribute(
            "style",
            `height:50px; 
             width:50px;
            background-color:${color};
             display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;`
          );
          pElem.setAttribute("style", "color:white");
          newElem.append(pElem);
        }
      }
    });

    mainElement.append(newElem);
  }

  radios.forEach((radio) => {
    radio.checked = false;
  });
};

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const count = document.querySelector("form input");
  generateShape(count.value);

  count.value = "";
});
