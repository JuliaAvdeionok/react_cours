import * as React from 'react';
import {SyntheticEvent} from 'react';
import {ToDo} from "../../model";

import injectSheet, {WithSheet} from 'react-jss';
import styles from './ToDoForm.styles';

interface Props {
    onAddToDO: (toDo: ToDo) => void;
}

interface State {
    name: string;
}

class ToDoForm extends React.PureComponent<Props & WithSheet<typeof styles>, State> {
    public state = {
        name: ''
    };

    private onSubmit = (e) => {
        e.preventDefault();
        const {name} = this.state;
        this.props.onAddToDO(new ToDo(name));
    };

    private onChange = (field: string) => {
        return (e: SyntheticEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            this.setState((state: State) => {
                const newState = Object.create(state);
                newState[field] = value;
                return newState;
            });
        };
    };

    public render() {
        const {classes} = this.props;

        return <form onSubmit={this.onSubmit} className={classes.root}>
            <input
                className={classes.field}
                value={this.state.name}
                onChange={this.onChange('name')}
                type='text'
                placeholder='Your new task'/>
            <button className={classes.button }>+</button>
        </form>;
    }
}


const StyledToDoForm = injectSheet(styles)(ToDoForm);

export {StyledToDoForm as ToDoForm};
