const producto = [
    {
      id: 1,
      name: "labial",
      price: "15.00",
      desc: "Labial color rojo",
      type: "cosmetico",
      merch: "avon"
    },
    {
      id: 2,
      name: "Libro Math",
      price: "120.00",
      desc: "Libro de Calculo Vectorial",
      type: "educativo",
      merch: "URRS"
    },
    {
      id: 3,
      name: "Perfume Imperius",
      price: "5000.00",
      desc: "Labial color rojo",
      type: "cosmetico",
      merch: "avon"
    },
  ];
  
// Lista todo
export const findAll = () => {
  return producto;
};
  
// Buscar por id
export const findOne = (id) => {
  return producto.find((u) => u.id === Number(id));
};
  
// crear
export const store = (product) => { 
  product.id = producto[producto.length-1].id+1;
  producto.push(product);
};
  
// update
export const update = (id, product) => {
  const index = producto.findIndex((u) => u.id === Number(id));
  producto[index] = {
    ...producto[index],
    ...product,
  };
};
  
export const remove = (id) => {
  const products = producto.filter((u) => u.id !== Number(id));
  producto.length = 0;
  producto.push(...products);
};