import { useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
const Api = () => {
  //state for store all data
  const [data, setdata] = useState([]);

  //state for input fields value
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  //state for updated input fields values
  const [userId, setUserId] = useState("");

  //for edit state 
  const [edited, setedited] = useState(false)
  //1.fetch api data get method
  const getData = () => {
    fetch("http://localhost:4000/blogs").then((res) => {
      res.json().then((data) => {
        //console.log(data)
        setdata(data);
      });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  //2. api post method
  const addBlog = () => {
    let data = { title, description };
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      //console.log("result" + res);
      res.json().then((resp) => {
        //console.log('response' + resp);
        getData();
        settitle("");
        setdescription("");
      });
    });
  };

  //3. Delete api method
  const deleteBlog = (id) => {
    //console.log(id);
    fetch(`http://localhost:4000/blogs/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((resp) => {
        //console.log(resp)
        getData();
      });
    });
  };

  //4. Put api method for update data
  //Prefilled Form when update 
  const updateBlog = (id) => {
    let details = data[id-1]
    setUserId(details.id)
    settitle(details.title)
    setdescription(details.description);
    setedited(true)
  };

  //update api called 
  const updateData = (id) => {
    let updatedData = {id, title, description}
    fetch(`http://localhost:4000/blogs/${userId}`, {
      method:'PUT',
      headers : {
        'Accept' : 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    }).then((result)=>{
      result.json().then((response)=>{
        //console.log(response);
        getData();
        settitle("");
        setdescription("");
        setedited(false)
      })
    })

  }

  return (
    <div>
      <h1>API Section </h1>
      <h2>
        <ul>
          <li> Call Get Method Api === Get</li>
          <li> Call Post Method Api === Post</li>
          <li> Call Delete Method Api === Delete</li>
          <li> Call update Method Api === Put / Patch</li>
        </ul>
      </h2>

      {/* form for ADD blog */}
      <div className="row justify-content-center my-5">
        <div className="col-sm-6">
          {
              edited ?  <h3> Update Blog</h3> : <h3>Add New Blog</h3>
            }
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title Here.."
                onChange={(e) => settitle(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Description">
              <Form.Label> Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Description Here.."
                onChange={(e) => setdescription(e.target.value)}
                value={description}
              />
            </Form.Group>

            {
              edited ? <Button variant="warning" type="submit" onClick={()=>updateData(userId)}>
              Update Blog
            </Button> : <Button variant="primary" type="submit" onClick={addBlog}>
              Add Blog
            </Button>
            }
          
          </Form>
        </div>
      </div>

      {/* fetch all data Table */}
      <div className="container text-center">
        <Table className="striped" variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th> Title</th>
              <th>
                <Button> Actions </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((apiData) => {
              return (
                <tr key={apiData.id}>
                  <td>{apiData.id}</td>
                  <td> {apiData.title}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteBlog(apiData.id)}
                    >
                      Delete{" "}
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => updateBlog(apiData.id)}
                      className="ms-2"
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Api;
