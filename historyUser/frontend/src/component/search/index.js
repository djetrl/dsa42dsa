import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './style.css';
const CustomSearch = () =>{
  const [value, setValue] = useState('')

  const onRedirect = (event)=>{
    event.preventDefault();
    console.log(value);
    window.location.replace(`${window.location.origin}/?page=1&userID=${value}` )
  }
  return(
    <Form className="customSearch" onSubmit={onRedirect}>
      <div className="customSearch_group">
        <Form.Control type="number" name="search" className='customSearch_input'  onChange={(e)=>setValue(e.target.value)}/>
        <Form.Text muted>Введите id пользователя и нажмите "Поиск"</Form.Text>
      </div>
      <div className="customSearch_group">
        <Button variant="primary" type="submit" className='customSearch_btn'>Поиск</Button>
      </div>
    </Form>
  )
}


export default CustomSearch;