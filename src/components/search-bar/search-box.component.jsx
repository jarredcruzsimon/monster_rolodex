import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        // destructuring, allows to use varriables within code without the 'this.props' prefix
        const { onChangeHandler, placeHolder, className } = this.props
        return (
            <input 
                className={`search-box ${className}`}
                type='search'
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        )
    }
}

export default SearchBox