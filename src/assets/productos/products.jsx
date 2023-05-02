const productos = 
[
    {
        id: 1,
        img: 'https://f.fcdn.app/imgs/fd9887/www.zooko.com.uy/zoo/2adf/original/catalogo/NKDR7803-100-1/1920-1200/remera-nike-sportswear-air-white.jpg',
        prenda: "Remera",
        detalle: "Remera Nike Air-White",
        marca: "NIKE",
        precio: "2000",
        talle: "M",
        stock: "10"
    },
    {
        id: 2,
        img: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5ecb2f19/products/NI_DM6337-010/NI_DM6337-010-2.JPG',
        prenda: "Remera",
        detalle: "Remera Nike Air-Black",
        marca: "NIKE",
        precio: "2000",
        talle: "L",
        stock: "10"
    },
    {
        id: 3,
        img: 'https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw82acf439/products/NI_DM6337-010/NI_DM6337-010-1.JPG',
        prenda: "Remera",
        detalle: "Remera NIke Air Moov",
        marca: "NIKE",
        precio: "2000",
        talle: "S",
        stock: "10"
    },
    {
        id: 4,
        img: 'https://thn.pe/media/catalog/product/cache/2/image/1200x/040ec09b1e35df139433887a97daa66f/b/v/bv2762-063.jpg',
        prenda: "Pantalón",
        detalle: "Pantalón Nike Club Jggr Grey",
        marca: "NIKE",
        precio: "2550",
        talle: "S",
        stock: "5"
    },
    {
        id: 5,
        img: 'https://www.triathlon.com.pe/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/base/BV2762-010.jpg',
        prenda: "Pantalón",
        detalle: "Pantalón Nike Club Jggr Black",
        marca: "NIKE",
        precio: "2550",
        talle: "M",
        stock: "5"
    },
    {
        id: 6,
        img: 'https://www.innovasport.com/medias/IS-HR6611-1.jpg?context=bWFzdGVyfGltYWdlc3w3MTY1NXxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDg5LzExNjYwNzczOTQ5NDcwLmpwZ3xhNmRmZTE4MjhiODAyMWQxMzYyNDZmMTI4OThjZTdkMjdkY2EzOWQ3ZDAwMDg5ZGVhNjllN2MxZDk5MjllNmZh',
        prenda: "Pantalón",
        detalle: "Pantalón Adidas Astro Black",
        marca: "Adidas",
        precio: "2990",
        talle: "L",
        stock: "10"
    },
    {
        id: 7,
        img: 'https://cdn.shopify.com/s/files/1/0443/6203/9458/products/ventiapp-image--4fd1222b-e2ee-4dd2-9414-4601442e0e2c_5_11_2022_15_8_38_883.png?v=1667682768',
        prenda: "Hoodie",
        detalle: "Hoodie Adidas Essentials Black",
        marca: "Adidas",
        precio: "4000",
        talle: "S",
        stock: "10"
    },
    {
        id: 8,
        img: 'https://photos6.spartoo.es/photos/175/17531648/17531648_1200_A.jpg',
        prenda: "Hoodie",
        detalle: "Hoodie Adidas Trefoil Grey",
        marca: "Adidas",
        precio: "3500",
        talle: "M",
        stock: "10"
    },
    {
        id: 9,
        img: 'https://f.fcdn.app/imgs/2074a9/www.zooko.com.uy/zoo/9866/original/catalogo/NKDM6059-321-1/1920-1200/buzo-nike-air-fleece-hoddie-321.jpg',
        prenda: "Hoodie",
        detalle: "Hoodie NIke Air Fleece",
        marca: "NIKE",
        precio: "5000",
        talle: "M",
        stock: "5"
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





