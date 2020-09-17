import React from "react";

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <div className="container my-5">
          <div className="card-body text-center">
            <h4 className="card-title">Special title treatment</h4>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className="card">
            <button
              id="add__new__list"
              type="button"
              className="btn btn-success position-absolute"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              <i className="fas fa-plus" /> Add a new List
            </button>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">List Name</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Edit List </th>
                  <th scope="col">list info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="#">
                      <i className="far fa-edit" /> edit
                    </a>
                    <a className="btn btn-sm btn-danger" href="#">
                      <i className="fas fa-trash-alt" /> delete
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-sm btn-info" href="#">
                      <i className="fas fa-info-circle" /> Details
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="#">
                      <i className="far fa-edit" /> edit
                    </a>
                    <a className="btn btn-sm btn-danger" href="#">
                      <i className="fas fa-trash-alt" /> delete
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-sm btn-info" href="#">
                      <i className="fas fa-info-circle" /> Details
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>
                    <a className="btn btn-sm btn-primary" href="#">
                      <i className="far fa-edit" /> edit
                    </a>
                    <a className="btn btn-sm btn-danger" href="#">
                      <i className="fas fa-trash-alt" /> delete
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-sm btn-info" href="#">
                      <i className="fas fa-info-circle" /> Details
                    </a>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Large modal */}
          <div
            className="modal fade bd-example-modal-lg"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="card-body text-center">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className=" card col-8 offset-2 my-2 p-3">
                  <form>
                    <div className="form-group">
                      <label htmlFor="listname">List name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="listname"
                        id="listname"
                        placeholder="Enter your listname"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="datepicker">Deadline</label>
                      <input
                        type="text"
                        className="form-control"
                        name="datepicker"
                        id="datepicker"
                        placeholder="Pick up a date"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="datepicker">Add a list item</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add an item"
                          aria-label="Search for..."
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary" type="button">
                            Go!
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardComponent;
