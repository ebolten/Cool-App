
import React from 'react'
import SearchBar from './Search.js'

//a container that will be rendered with <ContainerName />
class CoolContainer extends React.Component {
    
    render() {

        return (
            <div id='coolestDiv'>
                <div id='coolDiv'>I Am {this.props.searchText}.</div>
                <div id='coolDivTwo'>I Am Very {this.props.searchText}.</div>
                <div id='coolDivThree'>I Am Very Very {this.props.searchText}.</div>
                <div id='coolDivFour'>I Am Very Very Very {this.props.searchText}.</div>
                <div id='coolDivFive'>I Am Very Very Very Very {this.props.searchText}.</div>
                <div id='coolDivSix'>I Am Very Very Very Very Very {this.props.searchText}.</div>
            </div>
        )
    }
}

export default CoolContainer;