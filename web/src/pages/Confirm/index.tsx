import React from 'react'
import {FiCheckCircle} from 'react-icons/fi'
import './styles.css'
import {Link} from 'react-router-dom';



const Confirm = () => {
    return(
        <Link to="/"> 
     <div id="confirm-screem">
         <div>
             <FiCheckCircle className="check"/>
        </div>
        
         <h1>Cadastro Concluído!</h1>


     </div>
     </Link>
    )
}

export default Confirm;