import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';

class Attendance extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRedirect : false
     
    }
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
  }
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect: true
  })
  const data = JSON.stringify(this.state)
  localStorage.setItem("dataQr",data);
 
  }
  render() {
    if (this.state.isRedirect === true) {
      
    
      return <Redirect to="/qr" />;
  
    }
    
    return (
      <div className="wrapper">
        <div className="container-fluid">
          {/* Page-Title */}
          <div className="page-title-box">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h4 className="page-title">Điểm danh</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-right">
                  <li className="breadcrumb-item"><a href="/">MST</a></li>
                  <li className="breadcrumb-item active">Điểm danh</li>
                </ol>
              </div>
            </div>
            {/* end row */}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card m-b-30">
                <form className="card-body">
                  <h4 className="mt-0 header-title">Vui lòng chọn đầy đủ thông tin dưới đây !</h4>
                  <br />
                  <div className="form-group row">
                    <label className="col-sm-1 col-form-label">Chọn môn</label>
                    <div className="col-sm-3">
                      <select onChange={(event)=>this.isChange(event)} name="subject" className="form-control">
                        <option value="cnpm">Công nghệ phần mềm</option>
                        <option value="ptpm">Phát triển phần mềm</option>
                        <option value="java">Java</option>
                      </select>
                    </div>
                    <label className="col-sm-1 col-form-label">Chọn lớp</label>
                    <div className="col-sm-3">
                      <select onChange={(event)=>this.isChange(event)} name="class" className="form-control">
                        <option value="L01">L01</option>
                        <option value="L02">L02</option>
                        <option value="L03">L03</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-1 col-form-label">Key</label>
                    <div className="col-sm-3">
                      <input onChange={(event)=>this.isChange(event)} type="password" name="key"  className="form-control" />
                    </div>
                  </div>
                  <input onClick={(event)=> this.submitForm(event)}type="submit" value="Tạo Qr Code" className="btn btn-primary" />
                  
                </form>
              </div>
            </div>
          </div>
          
        </div>
        {/* end container-fluid */}
      </div>

    );
  }
}

export default Attendance;