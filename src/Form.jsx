import React from 'react'
import AddVisitor from './components/visitors/AddVisitor'
import Home from './components/pages/Home'
function Form() {
  return (
    <div>
     <div className=" container mx-5 my-5">
          <div className="row m-auto d-flex offset-md-1 mt-5">
               <div className="col-sm-4">
               <AddVisitor/>
               </div>     
          <div className="col">
               <Home/>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Form
