import React from "react";

export default function SearchEngine(props) {

  

   return (
     <div className="SearchEngine">
       <form>
         <div className="row">
           <div className="col-10">
             <input
               type="search"
               placeholder="Enter a city..."
               autoFocus={true}
               className="form-control"
           
             />
           </div>
           <div className="col-2">
             <input type="submit" value="Search" className="btn btn-success" />
           </div>
         </div>
       </form>
     </div>
   );


}
 
