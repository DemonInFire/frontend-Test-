import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Status from "./components/status";

class App extends React.Component{

  state = {
    success: null,
    error: null
  }

  //     this.setState({
  //       success: "Данные успешно добавлены",
  //       error: null
  //     })
  //   }

  //   else {
  //     this.setState({
  //       success: null,
  //       error: "Введите все данные"
  //     })
  //   }

  // }

  render(){
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="row-sm-7 info">
                <Info />
              </div>
              <div className="row-sm-5 form">
                <Form infoMethod={this.gettingInfo} />
                <Status
                  success={this.state.success}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;