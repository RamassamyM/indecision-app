import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
   
    handleAddOption = (e) => {
        e.preventDefault();
        const newOption = e.target.elements.option.value.trim();
        const error = this.props.onAddOption(newOption);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input 
                        type="text" 
                        name="option"
                        id="inputOption"
                        className="add-option__input" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}