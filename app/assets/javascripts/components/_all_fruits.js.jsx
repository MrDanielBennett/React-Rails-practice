const AllFruits = (props) =>{

  let fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
        <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

    return(
      <div>
      <h1>{fruits}</h1>
    </div>
    )
}
