
document.addEventListener("conteudoCaregando", () => {
    const carForm = document.getElementById("carForm");
    const carList = document.getElementById("carList");

    
    const loadCars = () => {
        const cars = JSON.parse(localStorage.getItem("cars")) || [];
        cars.forEach(car => addCarToList(car));
    };

    
    const addCarToList = (car) => {
        const imag = document.createElement("imagem")
        imag.src = "imagem"
        const li = document.createElement("li");
        li.textContent = `${car.brand} ${car.model} (${car.year})`;
        carList.appendChild(li);
    };

    
    carForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const model = document.getElementById("carModel").value;
        const brand = document.getElementById("carBrand").value;
        const year = document.getElementById("carYear").value;

        const newCar = { model, brand, year };

       
        const cars = JSON.parse(localStorage.getItem("cars")) || [];
        cars.push(newCar);
        localStorage.setItem("cars", JSON.stringify(cars));

        addCarToList(newCar);

        
        carForm.reset();
    });

    
    loadCars();
});
