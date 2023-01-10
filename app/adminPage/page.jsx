import GridComponent from './grid';
export default function AdminPage() {
 
  return (
    <div>
    Que quieres administrar   // ejecutar un fetch
    <select value="Radish">
  <option id='' value="Usuarios">Usuarios</option>
  <option id='' value="Productos">Productos</option>
  <option id='' value="Banner">Banner</option>
</select>
<GridComponent/>
    </div>
  );
}
