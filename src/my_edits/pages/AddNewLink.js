import React, {Component} from "react";
import {read, update, deleted, create} from "./../crud"

// Take new link in box
// Add that link to specific db

export default class AddNewLink extends Component{

    constructor(props) {
    super(props);
    this.state =  { link: '',
                    size: '',
                    finished: '',
                    downloadId: ''
                    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
  }

  handleChange(name, event) {
    this.setState({link: event.target.value});
    console.log(this.state.link)
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log("this is from submit"+this.state.link)
    this.create_new_link_on_db(this.state.link)
  }

  //create new link method
async create_new_link_on_db(link){
    console.log(link)
      create("DownloadList", {"link": String(this.state.link), "size": "0", "downloadId" : "false", "finished": "false"})
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Link:
          <input name="link" type="text" value={this.state.link} onChange={(e) => this.handleChange("melo", e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}