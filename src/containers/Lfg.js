import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#9A67EA",
    color: theme.palette.common.white,
    fontSize: 24,
    fontFamily: 'Oswald, sans-serif;',
    textAlign:'center',
    width:'50vw',
    border:0
},
body: {
  fontSize: 14,
  textAlign:'left',

},
}))(TableCell);


class Lfg extends React.Component{

    render(){
        return(
            <div style={{ overflow: 'auto', width: '75vw' }}>
            <Table >
        <TableHead>
            <TableRow>
                <CustomTableCell>Game</CustomTableCell>
                <CustomTableCell>Game Type</CustomTableCell>
                <CustomTableCell>Skill Ranking</CustomTableCell>
                <CustomTableCell>Players Needed</CustomTableCell>
            </TableRow>
        </TableHead>
</Table>
</div>
        )
    }
}
export default Lfg
