// Crear la URL base de la API
const API_URL ="https://proyecto-react-gilt-psi.vercel.app//items";

// Fucion para obtener todos los elementos
export const getItems = async () => {
    const response = await fetch(API_URL);// captura(Busca el tipo de informacion que contiene la url) la URL de la API, el fetch lleva de parametro en un hipervinculo
    return await response.json();
};

// Funcion para agregar un nuevo usuario
export const addItem = async (item) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(item),
    });
    return await response.json();
};

// Funcion para actualizar un usuario
export const updateItem = async (id, item) =>{
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(item),
    });
    return await response.json();
};

// Funcion para eliminar un usuario
export const deleteItem = async (id) =>{
    await fetch(`${ API_URL}/${id}`,{
        method: "DELETE"});
};