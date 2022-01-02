import React, { Component } from 'react';

class HigherOrderFunctions extends Component {

    constructor()
    {
      super();
      this.state=
      {
        userData: 
        [
          {id:'1',name:'Joe',user_type:'Hoe',age:32,years:11},
          {id:'2',name:'Guhan',user_type:'Developer',age:21,years:10},
          {id:'3',name:'Abi',user_type:'Data Analyst',age:29,years:1},
          {id:'4',name:'Rahul',user_type:'NFC',age:30,years:5},
          {id:'5',name:'Danish',user_type:'Engineer',age:24,years:4},
          {id:'6',name:'Vishal',user_type:'Developer',age:20,years:5}
  
        ]
      }
    }

    renderItems = () => {
        const data=this.state.userData;
        const mapRows=data.map((item) => (
            <React.Fragment key={item.id}>
                <hr />
                <li className='list-elements'>
                    <span>ID: {item.id} </span>
                    <span>Name :{item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
                <hr/>
            </React.Fragment>
        ));       
       
        return mapRows;
    }

    filterdesigner = () =>
    {
        const data = this.state.userData;
        const MapData = data
          .filter((item) => {
            let filteredItem = item.user_type === "Developer";
            return filteredItem;
          })
          .map((item) => {
            return (
              <p>
                <span className="span_item">Id: {item.id} </span>
                <span className="span_item">Name: {item.name} </span>
                <span className="span_item">Age: {item.age} </span>
                <span className="span_item">Years: {item.years} </span>
                <span className="span_item">User_type: {item.user_type} </span>
                <hr />
              </p>
            );
          });
        return MapData;
    }

    filterj = () =>
    {
        const data = this.state.userData;
        const MapData = data
          .filter((item) => {
            let filteredItem = item.name[0]==="J";
            return filteredItem;
          })
          .map((item) => {
            return (
              <p>
               <span className="span_item">Id: {item.id} </span>
                <span className="span_item">Name: {item.name} </span>
                <span className="span_item">Age: {item.age} </span>
                <span className="span_item">Years: {item.years} </span>
                <span className="span_item">User_type: {item.user_type} </span>
                <hr />
              </p>
            );
          });
        return MapData;
    }

    filterage = () =>
    {
        const data = this.state.userData;
        const MapData = data
          .filter((item) => {
            let filteredItem = item.age>28;
            return filteredItem;
          })
          .map((item) => {
            return (
              <p>
               <span className="span_item">Id: {item.id} </span>
                <span className="span_item">Name: {item.name} </span>
                <span className="span_item">Age: {item.age} </span>
                <span className="span_item">Years: {item.years} </span>
                <span className="span_item">User_type: {item.user_type} </span>
                <hr />
              </p>
            );
          });
        return MapData;
    }

    totalexp = () => 
    {

        let count = 0;
        const data = this.state.userData;
        data.filter((item)=> {
            let afda = item.user_type==="Developer"
            return afda;
        }).map(item=>count+=item.years)  
        
        return count;

    

    }

    




    render() {
        return (
            <React.Fragment>
            <h1> Display all items</h1>
            <h2>samp</h2>
            <div className='display-box'>
              <ul>
                {this.renderItems()}
              </ul>
              <hr />
            </div>    

            <div> 
                <h1> Filtered Based on Designer </h1>
                {this.filterdesigner()}

                
            </div>  

            <div>
            <h1> Filtered Name based on Names Starting with the letter 'j' </h1>
            {this.filterj()}

                
            </div>     
            <div>
            <h1> Filtered Name based on Names Starting with the letter 'j' </h1>
            {this.filterage()}

                
            </div>  

            <div>
            <h1> Filtered Name based on Names Starting with the letter 'j' </h1>
            <p>Total experience : {this.totalexp()} </p>



                
            </div>   

            

            
          </React.Fragment>
        );
    }
}

export default HigherOrderFunctions;