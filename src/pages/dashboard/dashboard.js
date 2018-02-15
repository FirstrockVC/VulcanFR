import React, {Component} from 'react';
import GraphKipContainer from '../graphKip';

class Dashboard extends Component {

  data = [];

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    this.setState({file:e.target.files[0]});
  }

  onUpload() {
    const { uploadData } = this.props;
    let reader = new FileReader();
    reader.readAsText(this.state.file);
    reader.onload = () => {
    let text = reader.result;
    uploadData(text, 'month');
    }
  }

  render() {
    return (
      <div>
      <div className="row">
        <div className="col-lg-4 form-group">
          <select placeholder='Period' className="form-control">
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div className="col-lg-8 input-group input-file" name="Fichier1">
            <input  type="file" className="form-control" onChange={this.onFileChange} placeholder='Choose a file...' />
              <span className="input-group-btn">
                <button className="btn btn-primary btn-reset" onClick={() => this.onUpload()} type="button">Upload</button>
            </span>
         </div>
      </div>
      <div className="row">
        <GraphKipContainer/>
      </div>
      </div>
    );
  }
}

export default Dashboard;
