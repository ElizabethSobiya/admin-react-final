import React from 'react';
import "./AdminPanel.css"
import axios from "axios";
import TableRow from './TableRow';
import InfoWrapper from './InfoWrapper';


class AdminPanel extends React.Component {


    state = {
    userData: [],
    activeUserIndex : 2,
    activeUserId : "",
    typeUserData : "",
    filteredUser: []

  };




  componentDidMount() {
    axios.get("https://adminpaneldata-edyoda-sourav.herokuapp.com/admin/data")
      .then((res) => {
        this.setState({ userData: res.data, activeUserId: res.data[2].id });
      })
  }

  changeSelectedBar = (id)=>{
      let activeUserIndex = this.state.userData.findIndex((user, i) =>{
          if(user.id == id){
              return true
          }
      })
      this.setState({activeUserId : id , activeUserIndex})
  }

  inputData = (e) => {
      let typeUserData = e.target.value
      this.setState({typeUserData})
      let filteredUser = this.state.userData.filter( (user, i) => {
        if(user.firstName.toLowerCase().includes(typeUserData.toLowerCase()) ){
          return true
        }
      })
      this.setState({typeUserData , filteredUser})
  }

  render() {
    return (
      <main>
        <div id="table-section">
          <form action="/">
            {/* <img src="./search-icon.svg" alt="Search Icon" /> */}
            <input
              type="text"
              onChange={this.inputData}
              placeholder="Enter something"
              name="search-box"
              id="search-box"
              value = {this.state.typeUserData}
            />
          </form>

          <div id="table-wrapper">
            <div id="table-headers">
              <table>
                <thead>
                  <tr>
                    <th className="column1">Id</th>
                    <th className="column2">FirstName</th>
                    <th className="column3">LastName</th>
                    <th className="column4">Email</th>
                    <th className="column5">Phone</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div id="table-data">
              <table>
                <tbody id="data">
                { this.state.filteredUser.length < 1 && this.state.typeUserData == "" ?
                  
                  this.state.userData.map((user, i) => {
                    return (
                      <TableRow 
                      changeSelectedBar = {this.changeSelectedBar}
                        activeUserId = {this.state.activeUserId} 
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        phone={user.phone}
                      />)
                    
                  }) : this.state.filteredUser.map((user, i) => {
                    return (
                      <TableRow
                      changeSelectedBar = {this.changeSelectedBar}
                      activeUserId = {this.state.activeUserId} 
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        phone={user.phone}
                      />)}
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            {this.state.userData.length > 0  ?
            <InfoWrapper
            activeUserDetails ={this.state.userData[this.state.activeUserIndex]}
                    /> : ""}
        
      </main>
    )
  }
}

export default AdminPanel;