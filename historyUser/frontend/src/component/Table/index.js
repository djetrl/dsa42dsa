
import { Table } from "react-bootstrap"




const TableCustom = ({data}) => {
 return(
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>id</th>
        <th colSpan={2}>текст лога</th>
        <th>дата</th>
        <th>id - юзера</th>
      </tr>
    </thead>
    <tbody>
      {data?.map((item, index)=>{
        return(
        <tr key={index}>
          <th>{item.id}</th>
          <th colSpan={2}> {item.textlog} </th>
          <th>{item.created_at}</th>
          <th>{item.id_user}</th>
        </tr>
        )
      })}

    </tbody>
  </Table>
  )
}


export default TableCustom;