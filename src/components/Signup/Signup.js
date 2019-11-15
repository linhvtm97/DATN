import React from 'react'
import callApi from "../../utils/apiCaller";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: "",
      password: "",
      password_confirm: ""
    };
  }

  onChange=(e) => {
    let target=e.target;
    let name=target.name;
    let value=
      target.type==="checkbox"
        ? target.checked
        :target.value;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    console.log(this.state);
  }
  onSubmit=(e) => {
    e.preventDefault();
    let {username,password}=this.state;
    let user={
      username: username,
      password: password
    };

    callApi("auth/register","POST",user).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        <div className="modal fade" id="signup">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form method="POST" onSubmit={this.onSubmit}>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <legend>Signup</legend>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      value={this.state.username}
                      name="username"
                      onChange={this.onChange}
                      required
                    />
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      name="password"
                      required
                    />
                    <label>Password confirm</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password confirm"
                      value={this.state.password_confirm}
                      name="password_confirm"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
