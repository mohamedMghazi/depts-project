import {TableCell, TableHead, TableRow} from "@material-ui/core";

export default function TableHeadWrapper()
{
    return <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Age</TableCell>
        </TableRow>
    </TableHead>
}
