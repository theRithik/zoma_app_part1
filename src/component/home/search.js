import React,{Component} from 'react';

const lurl=' http://3.17.216.66:4000/location';
const rurl=' http://3.17.216.66:4000/restaurant?stateId='

 class Search extends Component{
    constructor(){
        super()
        this.state={
            city:'',
            rest:''
        }
    }
 renderCity=(data)=>{
    if(data){
     return data.map((item)=>{
        return(
             <option value={item.state_id} key={item.state_id}>{item.state}</option>
        )
     })
    }
    
 }

 renderHotel=(data)=>{
    if(data){
        return data.map((item)=>{
            return (
                <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_namr}||{item.address}</option>
            )
        })
    }

 }

 handleChange=(e)=>{
    console.log(e.target.value)
 let stateId= e.target.value

 fetch((`${rurl}${stateId}`,{method:'GET'}))

 .then((res)=>res.json)

 .then((data)=>{
    this.setState({rest:data})
 })
 .catch((err)=>{
    console.log('>>>>>>>rest', err)
 })

 }

  
    render(){

    
    return(
        <><br/><br/>
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'>
            <select className='form-control' defaultValue={'Disabled'} onChange={this.handleChange} >
                <option value='Disabled' disabled>search city</option>
               {this.renderCity(this.state.city)}
            </select>
            </div>
            <div className='col-md-4'>
            <select className='form-control' defaultValue={'Disabled'}>
                <option value='Disabled' disabled>search Restaurant</option>
               {this.renderHotel(this.state.rest)}
            </select>
            </div>
            </div>
            </div><br/><br/>
    
        </>
    )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})

        .then((res)=>res.json)

        .then((data)=>{
            this.setState({city:data})
        })

        .catch((error)=>{
            console.log('>>>>>city',error)
        })
    }
 }
 export default Search;