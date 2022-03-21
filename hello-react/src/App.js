import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Attribute from "./components/Attribute";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
      welcome: { title: "welcome", desc: "hello,react" },
      header: { title: "Ubuntu", sub: "World Wide Web" },
      nav: [
        { id: 1, title: "HTML", desc: "HTML is Hypertext" },
        { id: 2, title: "CSS", desc: "Css is Hypertext" },
        { id: 3, title: "JS", desc: "Js is Hypertext" },
      ],
      attribute: { title: "Seungho", desc: "seungho is best" },
    };
  }
  render() {
    var _title = null;
    var _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.nav.length) {
        var data = this.state.nav[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div>
        <Header
          title={this.state.header.title}
          sub={this.state.header.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Header>
        {/* <h1>
          <a
            href="/"
            onClick={function (e) {
              console.log(e);
              e.preventDefault();
              this.setState({
                mode: "welcome",
              });
            }.bind(this)}
          >
            {this.state.header.title}
          </a>
        </h1> */}

        <Nav
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.nav}
        ></Nav>
        <Attribute title={_title} desc={_desc}></Attribute>
      </div>
    );
  }
}

export default App;
