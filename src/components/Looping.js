import { Table } from "react-bootstrap";
import TableBody from "./TableBody";

const Looping = () => {
  const fruits = ["apple", "mango", "grapes"];

  const students = [
    {
      id: 1,
      name: "Akshay",
      class: "1st",
      section: "A",
      address: [
        {
          city: "indore",
          state: "MP",
        },
      ],
    },
    {
      id: 2,
      name: "ankit",
      class: "1st",
      section: "B",
      address: [
        {
          city: "mandsor",
          state: "MP",
        },
      ],
    },
    {
      id: 3,
      name: "ruhana",
      class: "1st",
      section: "A",
      address: [
        {
          city: "neemmuch",
          state: "MP",
        },
      ],
    },
    {
      id: 4,
      name: "rajan",
      class: "1st",
      section: "C",
      address: [
        {
          city: "ajmer",
          state: "MP",
        },
      ],
    },
  ];
  return (
    <>
      <h1> Students Details</h1>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th> S.no</th>
            <th> Student Name</th>
            <th> Class</th>
            <th> Address</th>
          </tr>
        </thead>
        <tbody>
             {/* nested component */}
         <TableBody students={students}/>  
        </tbody>
      </Table>
    </>
  );
};

export default Looping;
