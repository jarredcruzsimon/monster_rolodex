import { Component } from 'react'
import './Card.styles.css'
import SMP from '../Single-Monster-Page/SMP.component'

class Card extends Component{
    constructor(){
        super();
    
        this.state = {
          showSMP: false,
        }
    }


    onClickEvent = ()=>{
        let updatedShowSMP
        this.state.showSMP ? updatedShowSMP = false: updatedShowSMP = true
        this.setState(() => {
            return {showSMP:updatedShowSMP}
          })
      }

    render(){
        // destructuring, allows to use varriables within code without the 'this.props' prefix
        const { name, email, id } = this.props.monster
        const { showSMP } = this.state
        const { onClickEvent } = this

        if (!showSMP){
            return (
                <div key={id} className="card-container">
                    <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                    <h2>{name}</h2>
                    <p><b>Email</b>{`: ${email}`}</p>
                    <span className='card-button'>
                        <button onClick={onClickEvent}>More Info</button>
                    </span>
                </div>
            )
        }
        else if (showSMP){
            return(
                <div className="card-container">
                    <SMP monsterInfo={this.props.monster}/>
                    <span className='card-button'>
                        <button onClick={onClickEvent}>Less Info</button>
                    </span>
                </div>
            )
        }
    }
}

export default Card