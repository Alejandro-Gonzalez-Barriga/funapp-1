import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


class App extends React.Component{
constructor(props){
super(props)
  this.state ={
    list:[]
  }
  this.getData = this.getData.bind(this);
};
addCommentPost(quantity, description){
   $.ajax({
     method: "POST",
     url: "/test",
     contentType: 'application/json',
     data: JSON.stringify({
       quantity: quantity,
       description:description
     })
   }).done(() => {
     this.getData();
   });
 }

getData(){
  $.ajax({
    url:'/test',
    method: 'GET',
    success: (results) => {
      this.setState({list:results});
    },
    error: (xhr, err) => {
      console.log('aqui la estoy cagando', err);
    }
  });
}

componentDidMount(){
  this.getData();
}

render(){
  return(
    <div>

      <h1> awebo </h1>

    </div>

  )
}

}
ReactDom.render(<App />,document.getElementById('app'));
