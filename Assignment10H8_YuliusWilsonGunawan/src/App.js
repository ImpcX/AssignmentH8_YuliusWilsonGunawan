import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          n1: null,
          n2: null,
          op: null,
          hasil: null
      }
  }

  // Fungsi Hitung
  submit(e) {
    e.preventDefault();
    var n1 = parseInt(this.refs.n1.value);
    var n2 = parseInt(this.refs.n2.value);
    var op = this.refs.op.value;

    var hasil;
    if(op == "+")
    {
      hasil = n1 + n2;
    }else if (op == "-")
    {
      hasil = n1 - n2;
    }else if(op == "*")
    {
      hasil = n1 * n2;
    }else
    {
      hasil = n1 / n2;
    }
    this.setState({n1, n2, op, hasil});
    this.refs.n1.value = null;
    this.refs.n2.value = null;
  }

  // Tampilin Hasil
  hasil() {
      const {n1, n2, op, hasil} = this.state;
      if (this.state.hasil)
      {
          return (
              <div>
                  <br />
                  <p>{n1+op+n2+'='+hasil}</p>
              </div>
          );
      }
  }

  // Tampilan Awal
  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.submit.bind(this)}>
            <label>Nilai :</label>
            <br />
            <input type="number" ref="n1" />
            <br />
            <input type="number" ref="n2" />
            <br />
            <hr />
            <label>Pilih</label>
            <br />
            <select ref="op">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <br />
            <button>Klik</button>
          </form>
          <hr />
          {this.hasil()}
          </center>
      </div>
    );
  }
}

export default App;
