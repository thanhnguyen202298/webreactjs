import React, { Component } from 'react';
import logo from './img/logo.png';
import './styles/App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo"><img src={logo}/></div>
          <div className="App-title"><p>CÔNG TY TNHH VẠN HOA TÂM</p>
            <p>Vì lợi ích sức khỏe cộng đồng, Chúng tôi đem đến sức khỏe vàng cho mọi nhà</p>
            <p>Hỗ trợ khách hàng:  0966 951 954</p>
          </div>
          <div>
            <ul id="nav">
              <li><Link to='/'>Sản Phẩm</Link></li>
              <li><Link to='/'>Giới Thiệu</Link></li>
              <li><Link to='/'>Kênh Phân Phối</Link></li>
              <li><Link to='/'>Tuyển Dụng</Link></li>
              <li><Link to='/'>Liên Hệ</Link></li>
            </ul>
          </div>
        </header>
        <container>
          {this.props.children}
        </container>
      </div>
    );
  }
}

export default App;
