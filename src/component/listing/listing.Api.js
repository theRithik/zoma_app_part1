import React,{Component} from 'react'
import axios from 'axios'
import ListDisplay from './listingDisplay'

const url=' http://3.17.216.66:4000/restaurant?mealtype_id='

class Listing extends Component {
    constructor(){
        super()
        this.state={
            resList:''
        }
    }
    render(){
        return(
            <>
            <div className='conatiner'>
                <ListDisplay ListMeal={this.state.resList}/>
            </div>
            </>
        )
    }
    componentDidMount(){
        let mealId=this.props.match.params.mealId
       sessionStorage.setItem('mealId',mealId );
        axios.get(`${url}${mealId}`)
        .then((res)=>{
            this.setState({resList:res.data})
        })
        .catch((err)=>{
            console.log('>>>>>>Listing', err)
        })
    }
}
export default Listing;