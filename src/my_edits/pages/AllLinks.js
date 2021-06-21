import React, {Component} from "react";
import {read, update, deleted, create} from "./../crud"

// Take new link in box
// Add that link to specific db

export default class AllLinks extends Component{

      constructor(props) {
    super(props);
    this.state =  { link: '',
                    size: '',
                    list: [],
                    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
      var lists = []

    const results = await read('DownloadList')
    // results.then()
    // console.log("from dddd "+ results)
    // if(results != 0){
for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      console.log(object.id)
      const link = object.get('link');
      const size = object.get('size');
      lists.push( {"link": String(link), "size": String(size)})
      
    //   console.log("from ddasd"+ myCustomKey1Name + " da " +myCustomKey2Name)
    //   deleted(className, String(object.id))
    //   console.log("myCustomKey1Name: "+myCustomKey1Name);
    //   console.log(myCustomKey2Name);
    }
    // }
    console.log(lists)
    this.setState({
        list: lists
      })
    
  }

  handleChange(name, event) {
    this.setState({link: event.target.value});
    console.log("lists: " + this.state.lists)
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log("this is from submit"+this.state.link)
    this.create_new_link_on_db(this.state.link)
  }

  //create new link method
async create_new_link_on_db(link){
    console.log(link)
      create("DownloadList", {"link": String(this.state.link), "size": "0"})
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