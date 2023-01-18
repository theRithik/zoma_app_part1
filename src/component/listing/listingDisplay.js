import React from 'react';
import {Link} from 'react-router-dom';

const ListDisplay =(props)=>{
    const output =({ListMeal})=>{
        if(ListMeal){
            if(ListMeal>0){
                return ListMeal.map((item)=>{
                    return(
                        
                        <div className='container' key={item.restaurant_id}>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={item.restaurant_thumb} alt='restarant'/>
                                </div>
                                <div className='hotel-name'>
                                    <Link to={`/details?restId=${item.restaurant_id}`}>
                                        {item.restaurant_name}
                                    </Link>
                                </div>
                                <div className='col-md-7'>
                                    <div className='city-name'>{item.address}</div>
                                    <span className='label label-primary'>{item.mealType[0].mealType_name}</span>&nbsp;
                                    <span className='label label-success'>{item.mealType[1].mealType_name}</span>
                                </div>
                                <div className='label'>
                                    <span className='label label-primary'>{item.cusine[0].cusine_name}</span>&nbsp;
                                    <span className='label label-info'>{item.cusine[0].cusine_name}</span>
                                </div>
                            </div>
                              
                        </div>
                        
                    )
                })
            }else{
                return(
                    <>
                    <h2>No Data as per Filter</h2>
                    </>
                )
            }
           
        }else{
            return(
                <div>
                      <h2>Loading....</h2>
                      <img src='/images/loader.gif' alt='Loader' style={{paddingLeft:'300px'}}/>
                </div>
               
            )
        }

    }
    return(
        <>
        {output(props)}
        </>
    ) 
}
export default ListDisplay