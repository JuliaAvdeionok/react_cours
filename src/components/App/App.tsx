import * as React from 'react';
import {ToDoList} from "../ToDoList";
import {Header} from "../Header";
import {ToDoForm} from "../ToDoForm";
import {ToDo} from "../../model";

import injectSheet, {WithSheet} from 'react-jss';
import styles from './App.styles';

interface State {
    newToDos: Array<ToDo>;
}
class App extends React.Component <{} & WithSheet<typeof styles>, State> {
    state = {
        newToDos: Array<ToDo>()
    };

    private addToDo = (newToDo: ToDo) => {
        this.setState(state => ({...state, newToDos: [...state.newToDos, newToDo]}));
    };

    private handleCheckedChange = ({id, isChecked}) => {
        this.setState(state => {
                const newState = Object.create(state);
                newState.newToDos.map(toDo => {
                        if (toDo.id === id) {
                            toDo.isAchieved = isChecked;
                        }
                        return toDo;
                    }
                );
                return newState;
            }
        );
    };

    private handleToDoRemove = ({id}) => {
        this.setState(state => {
            const newState = Object.create(state);
            newState.newToDos  = newState.newToDos.filter((toDo => {
                return toDo.id !== id;
            }));
            return newState;
        });
    };

    render() {
        return (
            <div className={this.props.classes.app}>
                <header>
                    <Header/>
                </header>
                <div>
                    <ToDoForm onAddToDO={this.addToDo}/>
                </div>
                <div>
                    <div>Your current list:</div>
                    <ToDoList key={Math.floor(Math.random() * 99999)}
                              newToDo={this.state.newToDos}
                              onToDoChecked={this.handleCheckedChange}
                              onToDoRemove={this.handleToDoRemove}/>
                </div>
            </div>
        );
    }

}
const StyledApp = injectSheet(styles)(App);

export {StyledApp as App};
