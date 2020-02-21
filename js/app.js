const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "img/coffee1.jpg" },
  { name: "Voluptatem", image: "img/coffee2.jpg" },
  { name: "Explicabo", image: "img/coffee3.jpg" },
  { name: "Rchitecto", image: "img/coffee4.jpg" },
  { name: " Beatae", image: "img/coffee5.jpg" },
  { name: " Vitae", image: "img/coffee6.jpg" },
  { name: "Inventore", image: "img/coffee7.jpg" },
  { name: "Veritatis", image: "img/coffee8.jpg" },
  { name: "Accusantium", image: "img/coffee9.jpg" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Message</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)