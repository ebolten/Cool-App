import React from 'react'

import App from './App.js'

//a container that will be rendered with <ContainerName />
class SearchBar extends React.Component {

    render() {
        return(
            <div>
                What Am I?
                <br/>
                <form>
                    <input onChange={this.props.changingText}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar