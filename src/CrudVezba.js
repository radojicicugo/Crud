import React, {useState} from 'react';



function CrudVezba(props) {

     const [name, setName] = useState('')
     const [list, setList] = useState([])
     const [show, setShow] = useState(false)
     const [editIndex, setEditIndex] = useState()


     const handleAdd = (e) => {
          e.preventDefault();
          console.log(name)
          if(name !==0){
               setList(newData => [...newData, name])
               setName("")
          }
     }

     const handleDelete = (index) => {
       list.splice(index, 1)
       setList([...list])
     }

     const handleEdit = (i) => {
         setName(list[i])
         setShow(true)
         setEditIndex(i)
     }

     const handleUpdate = () => {
       list.splice(editIndex, 1, name)
       setList([...list])
       setShow(false)
       setName("")
     }

     return (
          <div>
              <h3>Crud operacija vezba</h3>
              <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              {!show?<button onClick={handleAdd} >Add</button>:
              <button onClick={handleUpdate} >Update</button>}
              {
               list.map((el, i) =>(
                    <div>
                         <p>* {el} </p>
                         <button onClick={() => handleEdit(i)} >Edit</button>
                         <button onClick={() => handleDelete(i)} >Delete</button>
                    </div>
               ))
              }
          </div>
     );
}

export default CrudVezba;