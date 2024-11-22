import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import { deleteItem, addItem,getItems,updateItem } from "../services/itemServices";

const Comentarios = () =>{
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ nombre: "", email: "", mensaje: ""});
    const [editingId, setEditingId] = useState(null);
    
    // Cargue de los items ingresados
    useEffect(( ) =>{
      loadItems();
    },[]);
    
    // Obtenga los datos ingresados en la lista
    const loadItems = async () =>{  
      const data = await getItems();
      setItems(data);
    };
    
    // 
    const handleChange =  (event) =>{
      setForm({...form, [event.target.name]: event.target.value});
    };
    
    // Aqui especificamos las acciones de los botones
    const handleSubmit = async (event) =>{
      event.preventDefault();
      if(editingId) {
        await updateItem(editingId, form);
        Swal.fire({
          title: "Actualizado!",
          text: "El item ha sido actualizado correctamente",
          icon: "success",
          confirmButtonText: "Ok"
        });
        setEditingId(null);
      }else {
        await addItem(form);
        // Ventana emergente 
        Swal.fire({
          title: "Dato Ingresado",
          text: "El usuario ha sido ingresado con exito",
          icon: "success",
          confirmButtonText: "Ok"
        });
      }
      setForm({nombre: "", email:"", mensaje: ""});
      loadItems();
    };
    // Ventana emergente para especificar a la persona que estamos editando
    const handleEdit = (item) =>{
      setForm(item);
      setEditingId(item._id);
      Swal.fire({
        title: "Modo de edicion",
        text: `Editando: ${item.nombre}`,
        icon: "info",
        confirmButtonText: "Si señor, entendido"
      });
    };
    // Ventana emergente para confirmar la eliminación
    const handleDelete = async (id) => {
      const result = await Swal.fire({
        title: "¿Estas seguro?",
        text: "Una vez eliminado, no se podra recuperar el item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Si, eliminarlo!"
      });
      // Si el usuario le da click en confirmar, el usuario se eliminara
      if (result.isConfirmed) {
        await deleteItem(id);
        Swal.fire("Eliminado", "El usuario ha sido eliminado con exito", "success");
        setForm({nombre: "", email:"", mensaje: ""});
        setEditingId(null);
        loadItems();
      }
    };
    return (
        <div className="col-md-4 mb-4 text-white py-4">
            <h5>¿Tienes alguna duda? Déjanos tus datos:</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input name="nombre"
                 className="form-control"
                 placeholder="Tu nombre"
                 value={form.nombre}
                 onChange={handleChange}
                 required
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input name="email"
                 type="email"
                 className="form-control"
                 placeholder="Tu correo electrónico"
                 value={form.email}
                 onChange ={handleChange}
                 required
                 />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea name="mensaje" 
                className="form-control"
                rows="3" 
                placeholder="Tu mensaje"
                value={form.mensaje}
                onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success">{editingId ? "Actualizar": "Enviar"}</button>
            </form>
            
            <div className="item-list">
      
      {items.map((item) => (
        <div key={item._id} className="item py-2" >
          <span>
            <strong>{item.nombre}</strong>: {item.mensaje}
          </span>
          <div className="item-buttons">
            <button className="edit-btn btn btn-primary mx-2" onClick={() => handleEdit(item)}>
              Editar
            </button>
            <button className="delete-btn btn btn-danger" onClick={() => handleDelete(item._id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
          </div>
    )
}

export default Comentarios;