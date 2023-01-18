import React,{Component} from 'react'
import QuickDisplay from './quickDisplay'

const url= 'http://3.17.216.66:4000/quicksearch';
class QuickSearch extends Component{
constructor(){
    super()
    this.state={
         quick:''
    }
}

// renderSearch=(data)=>{
//     if(data){
//         return data.map((item)=>{
//             return (
//                 <>
//               <div class="card" style={{width: '18rem'}}>
//   <img src={item.image} class="card-img-top" alt="image"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//                 </>
//             )
//         })
//     }

// }
render(){
    return(
       <>
   <div className='container'>
    <h2>Quick Search</h2>
    <QuickDisplay mealType={this.state.quick}/>
   </div>
       </>
    )
}
componentDidMount(){
    fetch(url,{method:'GET'})

    .then((res)=>res.json)

    .then((data)=>{
        this.setState({quick:data})
    })
    .catch((error)=>{
        console.log('>>>>>>QuickSearch', error)
    })
}
}

export default QuickSearch;