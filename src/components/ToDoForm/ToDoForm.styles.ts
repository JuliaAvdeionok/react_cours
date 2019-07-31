export default {
    root: {
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: '1fr 70px',
        gridTemplateRows: '60px',
        gridGap: '1px'
    },
    field: {
        padding: '12px 20px',
        margin: '8px 0px',
        border: '1px solid #ccc',
        borderRadius: 4,
        outline: 'none',
        fontSize: 14,
    },
    button: {
        padding: '0 20px',
        margin: '8px 0px',
        borderRadius: 5,
        color: '#000',
        fontSize: 30,
        '&:hover': {
            color: '#D32520',
        }
    }
};
