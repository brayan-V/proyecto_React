// Crear las URL de la API
const API_URL = import.meta.env.VITE_API_URL + "/items"; // URL para comentarios
const API_LOGIN_URL = import.meta.env.VITE_API_URL + "/login"; // URL para el login
const API_REGISTER_URL = import.meta.env.VITE_API_URL + "/registro"; // URL para el registro

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

// Funcion para iniciar sesión
export const loginUser = async (user) => {
    try {
        const response = await fetch(API_LOGIN_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Error al iniciar sesión");
        }

        const data = await response.json();
        localStorage.setItem("token", data.token);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Funcion para registrar un nuevo usuario
export const registerUser = async (user) => {
    try {
        const response = await fetch(API_REGISTER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Error en el registro");
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};
