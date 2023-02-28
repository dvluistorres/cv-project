import React, {Component} from "react";

export default class Title extends Component{
    constructor(){
        super ();

        this.state = {
            title : 'No title',
            language : 'English',
            editable : false
        }
    
        this.onTitleClick = this.onTitleClick.bind(this);
        this.onTitleBlur = this.onTitleBlur.bind(this);
        this.titleRef = React.createRef();
    }

    onTitleClick(){
        this.setState({editable: true})
    }

    onTitleBlur(){
        const newTitle = this.titleRef.current.innerText;
        this.setState({title: newTitle, editable: false});
    }

    render(){
    const {title, language, editable} = this.state;
    
    return(
        
        <div>
            <div ref={this.titleRef} 
                onClick={this.onTitleClick} 
                onBlur={this.onTitleBlur} 
                contentEditable={editable} 
                id="CVTittle">
                    {title}
                </div>
            <div id="CVLanguage">{language}</div>
        </div>
    )
    }
}

