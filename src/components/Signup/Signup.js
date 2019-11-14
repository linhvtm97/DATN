import React from 'react'

class Signup extends React.Component {

    render() {
        return (
            <div>
                <div className="modal fade" id="signup">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form action="" method="POST" role="form">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <legend>Signup</legend>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" id="" placeholder="username" required/>
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="" placeholder="password" required/>
                                        <label >Password confirm</label>
                                        <input type="password" className="form-control" id="" placeholder="password confirm" required/>
                                    </div>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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