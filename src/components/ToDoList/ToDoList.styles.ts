export default {
    ToDoItemRow: {
        width: 500,
        display: 'grid',
        gridTemplateColumns: '70px 1fr 70px',
        gridTemplateRows: '60px',
        gridGap: '1px'
    },
    toDoItem: {
        border: '1px solid #ccc',
    },
    toDoItemCheckedWrap: {
        position: 'relative',
        display: 'block',
        cursor: 'pointer',
        '& input[type="checkbox"]': {
            position: 'absolute',
            opacity: 0,
            cursor: 'pointer',
            height: 0,
            width: 0
        },
        '& label': {
            position: 'absolute',
            top: 0,
            left: 0,
            height: 42,
            width: 68,
            margin: '8px 0px',
            borderRadius: 5,
            border: '1px solid #ccc',
        },
    },
    toDoCheckMark: {},
    toDoCheckMarkChecked: {
        '&:after': {
            position: 'absolute',
            top: 14,
            left: 20,
            content: '""',
            width: 26,
            height: 8,
            display: 'block',
            cursor: 'pointer',
            background: "transparent",

            border: '3px solid #333',
            borderTop: 'none',
            borderRight: 'none',

            transform: 'rotate(-45deg)'
        }
    },
    toDoItemCheckBox: {

    },
    ToDoItemName: {
        padding: '12px 20px',
        margin: '8px 0px',
        borderRadius: 5,
        border: '1px solid #ccc',
    },
    buttonDel: {
        padding: '0 20px',
        margin: '8px 0px',
        borderRadius: 5,
        color: '#000',
        fontSize: 30,
        '&:hover': {
            color: '#D32520',
        }
    }
}
