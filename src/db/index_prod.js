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
  return data;
};
  
// Buscar por id
export const findOne = (id) => {
  return data.find((u) => u.id === Number(id));
};
  
// crear
export const store = (product) => { 
  product.id = data[data.length-1].id+1;
  data.push(product);
};
  
// update
export const update = (id, product) => {
  const index = data.findIndex((u) => u.id === Number(id));
  data[index] = {
    ...data[index],
    ...product,
  };
};
  
export const remove = (id) => {
  const products = data.filter((u) => u.id !== Number(id));
  data.length = 0;
  data.push(...products);
};