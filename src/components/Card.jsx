export default function Card(props) {
   return (
      <div>
         {/* //! se le pasa el cb a onClick sin  (para que no se ejecute) */}
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h4>{props.species}</h4>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name}/>
      </div>
   );
}
//! esto es lo que llega en el objeto props
// -  **name**: Nombre
// -  **species**: Especie
// -  **gender**: Género
// -  **image**: Imagen
// -  **onClose**: La función que se va a ejecutar 