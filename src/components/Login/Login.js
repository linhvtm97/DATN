import React from "react";
import callApi from "../../utils/apiCaller";
export const statusCode={
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: "",
      password: "",
      isLoggedIn: false
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
    callApi("auth/login","POST",JSON.stringify(user)).then((res) => {
      if(res.data.meta.status===statusCode.OK) {
        this.setState({isLoggedIn: true});
        localStorage.setItem('user',res.data.data.user.name)
        window.location.replace("/");
      }
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
