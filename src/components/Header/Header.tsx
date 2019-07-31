import * as React from 'react';

import withStyles, { WithSheet } from 'react-jss';
import styles from './Header.styles';

const Header: React.FC<{} & WithSheet<typeof styles>> = ({classes}) => {
    return <div className={classes.header}>
        <h1>TO DO LIST</h1>
        <h2>Finish it today!</h2>
    </div>;
};

const StyledHeader = withStyles(styles)(Header);

export {StyledHeader as Header};
