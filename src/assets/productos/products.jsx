const productos = 
[
    {
        id: 1,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Remera",
        marca: "NIKE",
        talle: "M"
    },
    {
        id: 2,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Remera",
        marca: "NIKE",
        talle: "L"
    },
    {
        id: 3,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Remera",
        marca: "NIKE",
        talle: "S"
    },
    {
        id: 4,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Canguro",
        marca: "NIKE",
        talle: "M"
    },
    {
        id: 5,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Canguro",
        marca: "NIKE",
        talle: "M"
    },
    {
        id: 6,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Canguro",
        marca: "NIKE",
        talle: "M"
    },
    {
        id: 7,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Canguro",
        marca: "NIKE",
        talle: "M"
    },
    {
        id: 8,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Canguro",
        marca: "NIKE",
        talle: "M"
    },
    {
        id: 9,
        img: 'C:\Users\Lenovo\OneDrive\Escritorio\Agustin\React Js\Proyecto\primer-proyecto-react\src\assets\img\cnike.jpg',
        prenda: "Canguro",
        marca: "NIKE",
        talle: "M"
    }
]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === productoId))
        }, 500)
    })
}





