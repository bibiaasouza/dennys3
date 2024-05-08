import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import Loja from './loja.jpg';
import Navbar from './Navbar';
import { Button, Form} from 'react-bootstrap';

function Coco(){
    return(
        <div class="loja">
        <img src={Loja} class='./loja.jpg' alt="logos" height={350} width={390}></img>
        <div class="nome">
        <h4> Coco & Lola </h4> 
        <br></br>
        <h5>Localização: R.Wanderley Pinho, 517-</h5>
        <h5>Itaigara, Salvador - BA, 452875-270</h5>
        <br></br>
        <h5>Horário de funcionamento: 08:00 - 10:00</h5>
       
        <Button variant="primary" type="submit" block className="custom-button">
  Entrar
</Button>
        </div>
    </div>
        
    )
}

export default Coco;