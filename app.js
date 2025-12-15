let projects = JSON.parse(localStorage.getItem("projects")) || [];

function addProject() {
  const data = {
    client: client.value,
    project: project.value,
    price: price.value,
    deposit: deposit.value
  };

  projects.push(data);
  localStorage.setItem("projects", JSON.stringify(projects));
  render();
}

function render() {
  list.innerHTML = "";
  projects.forEach((p, i) => {
    list.innerHTML += `
      <li>
        <b>${p.project}</b><br>
        Client: ${p.client}<br>
        Balance: RM ${p.price - p.deposit}
      </li><hr>`;
  });
}

render();
