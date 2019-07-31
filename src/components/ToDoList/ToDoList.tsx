import * as React from 'react';
import {SyntheticEvent} from 'react';
import {ToDo} from "../../model";

import injectSheet, {WithSheet} from 'react-jss';
import styles from './ToDoList.styles';


interface Props {
    newToDo: Array<ToDo>;
    onToDoChecked: ({id: string, isChecked: boolean}) => void;
    onToDoRemove: ({id: string}) => void;
}

interface State {
    toDos: Array<ToDo>;
}

class ToDoList extends React.PureComponent<Props & WithSheet<typeof styles>, State> {
    public state = {
        toDos: Array<ToDo>()
    };

    public render() {
        return <div>
            {this.renderToDo()}
        </div>;
    }

    private handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
        this.props.onToDoChecked({
            id: e.currentTarget.id,
            isChecked: e.currentTarget.checked
        });
    };

    private delToDo = (e: SyntheticEvent<HTMLButtonElement>) => {
        console.log("e.currentTarget.id: " + e.currentTarget.id);
        this.props.onToDoRemove({
            id: e.currentTarget.id
        });
    };

    private renderToDo() {
        const {classes} = this.props;
        return this.props.newToDo.map(toDo => {
            return (
                <div key={Math.floor(Math.random() * 99999)} className={classes.ToDoItemRow}>
                    <div className={classes.toDoItemCheckedWrap}>
                        <input
                            className={classes.toDoItemCheckBox}
                            id={toDo.id}
                            type="checkbox"
                            checked={toDo.isAchieved}
                            onChange={this.handleChange}
                        />
                        <label htmlFor={toDo.id}
                               className={toDo.isAchieved ? classes.toDoCheckMarkChecked : classes.toDoCheckMark}
                        />
                    </div>
                    <div className={classes.ToDoItemName}> {toDo.newName} </div>
                    <button className={classes.buttonDel} onClick={this.delToDo} id={toDo.id}> -</button>
                </div>
            )
        })
    }

}


const StyledToDoList = injectSheet(styles)(ToDoList);

export {StyledToDoList as ToDoList};
