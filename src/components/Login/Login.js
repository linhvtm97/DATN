import React from "react";
import callApi from "../../utils/apiCaller";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: "",
      password: ""
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

    callApi("auth/login","POST",user).then((res) => {
      console.log(res);
    });
  };

  render() {
    let {username,password}=this.state;
    return (
      <div>
        <div className="modal fade" id="login">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form
                  method="POST"
                  onSubmit={
                    this
                      .onSubmit
                  }
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                                                                                          </button>
                  <legend>
                    Login
                                                                                          </legend>
                  <div className="form-group">
                    <label>
                      Username
                                                                                                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={
                        username
                      }
                      name="username"
                      placeholder="username"
                      required
                      onChange={
                        this
                          .onChange
                      }
                    />
                    <label>
                      Password
                                                                                                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={
                        password
                      }
                      name="password"
                      placeholder="password"
                      required
                      onChange={
                        this
                          .onChange
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                                                                                          </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                                                                                          </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
