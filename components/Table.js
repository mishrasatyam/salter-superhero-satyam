import TableRow from "./TableRow"

const Table = ({results}) => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-4 ">
        {results.map(el => <TableRow data = {el} key={el.data?.id}/>)}   
    </div>
    )
}

export default Table