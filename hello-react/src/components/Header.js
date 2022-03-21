import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault(); //링크 클릭 페이지 바뀌는거막음
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <h2>{this.props.sub}</h2>
      </div>
    );
  }
}
export default Header;
