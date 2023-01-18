import React from 'react';
import {Link} from 'react-router-dom';

const QuickSearch =(props)=>{


    const output=({mealType})=>{
        if(mealType){
            return mealType.map((item)=>{
                console.log('>>>>>>>mealType', item)
                return (
                    <Link to='/listing' key={item.mealType_id}>
                    <div className="card" style={{width: '18rem'}}>
                    <img src={item.meal_image} className="card-img-top" alt="hotel"/>
                     <div className="card-body">
                      <h5 className="card-title">Card title{item.name}</h5>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
                      </div>
                      </Link>
                )
            })
        }
    }
    return(
            <>
             <div className="card" style={{width: '18rem'}}>
                    <img src='' className="card-img-top" alt="hotel"/>
                     <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
                      </div>
           {output(props)}
             </>
         )
}
export default QuickSearch;