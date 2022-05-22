import { Component } from "react";

class SMP extends Component{
    render() {
        const { email, name, id, company, phone} = this.props.monsterInfo
        return(
            <div className="monster-info-card" onClick={this.showInfo} key={id}>
                <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p><b>Company</b>{`: ${company.name}`}</p>
                <p><b>Phone</b>{`: ${phone}`}</p>
                <p><b>Email</b>{`: ${email}`}</p>
            </div>
        )
    }
}

export default SMP