import React from 'react';
import AddOption from './AddOption.js';
import Action from './Action.js';
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((element) => option !== element)
        }));
    }
    handleDeleteOptions= () => {
        this.setState(() => ({ options: [] }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            onDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption onAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseOptionModal={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ["one", "two", "three", "four"]
};

