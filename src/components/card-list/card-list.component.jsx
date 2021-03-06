import { Component } from "react";
import './card-list.styles.css'
import Card from "../Card/Card.component";

class CardList extends Component {
    render() {
         // destructuring, allows to use varriables within code without the 'this.props' prefix
         const { monsters } = this.props
        return (
            <div className="card-list">
                {
                    monsters.map(monster =>{
                        return(
                         <Card monster={monster}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList