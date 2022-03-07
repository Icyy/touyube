import React from "react";


class SearchBar extends React.Component{

    state = {'name' : ''};

    render(){

        
        const submitForm = (e)=>{
            e.preventDefault();
        }

        const changeValue = (e)=>{
            this.setState({'name': e.target.value});
        }

        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={submitForm}>
                <div className="field">
                    <input onChange={changeValue} value={this.state.name}/>
                   {console.log(this.state.name)}
                    <button type="submit" >Search</button>
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;