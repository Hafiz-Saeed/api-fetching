import React, { useEffect, useState } from 'react'

import './api.css'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Apifetch() {

    const [product,setProduct] = useState([]);

   const base_url = 'https://dummyjson.com/products';

   const fetchData = async() => {
    const response = await fetch(base_url)
    .then(response => response.json()) //json to array
   .then(products => setProduct(products.products)); //obj => array ie;item.item
}
console.log(product);

  useEffect(() => {
    fetchData();
  },[])

  
  return (
    
    <div className='box'>
        {

 product.map(item => (
    //display data as card
    <Card style={{ width: '18rem' }} id='cards'>
    <Card.Img variant="top" src={item.thumbnail} />
    <Card.Body>
      <Card.Title>{item.brand}</Card.Title>
      <Card.Text>
        {item.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item>Stocks : {item.price}💵</ListGroup.Item>
      <ListGroup.Item>Stocks : {item.stock}</ListGroup.Item>
      <ListGroup.Item>Category : {item.category}</ListGroup.Item>
      <ListGroup.Item>Rating : {item.rating}⭐
      <button className='btn btn-primary m-4'>Add to Cart</button></ListGroup.Item>
      
    </ListGroup>

  </Card>
 ))   
        }
    </div>
  )
}

export default Apifetch