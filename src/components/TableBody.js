import { Table } from "react-bootstrap";

const TableBody = ({students}) => {
    return (
        <>
             {students.map((student, index) => {
            return (
              <tr key={index}>
                <td> {student.id}</td>
                <td> {student.name}</td>
                <td> {`${student.class} ( ${student.section} )`}</td>
                <td>
                  <Table striped bordered hover variant="dark" >
                  <tbody>
                    {student.address.map((add, id) => {
                      return (
                          <tr key={id}>
                            <td>{add.city}</td>
                            <td>{add.state}</td>
                          </tr>
                      );
                    })}
                    </tbody>
                  </Table>
                </td>
              </tr>
            );
          })}
        </>
    )
}

export default TableBody
