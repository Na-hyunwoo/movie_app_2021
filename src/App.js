import React from "react";


class App extends React.Component{
//state라는 녀석은 값이 변할 수 있다. 따라서 클래스를 사용하는 이유는 state 때문이고 이는 아주 유용하다 !
  state={
    count:0
  };

  add=()=>{
    this.setState(current=>({count:current.count+1}));
  };

  minus=()=>{
    this.setState(current=>({count:current.count-1}));
  };

  render(){
    return <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>;
  };

}


export default App;
