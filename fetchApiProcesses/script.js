fetch("http://localhost:3000/projects")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const display = document.querySelector(".display");
    data.forEach((project) => {
      const { id, description } = project; //!!desrtucturing
      display.innerHTML += `${description} <br>`;
    });
  });
