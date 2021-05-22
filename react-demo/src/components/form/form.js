
import React from 'react';
import './form.css';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      method: ''
    }
  }
  onSubmit = async (event) => {
    event.preventDefault();

    if (this.state.url && this.setState.method) {
      this.props.handler(this.state)
    }
    // await this.setState({
    //   urlInput: event.target.url.value,
    //   method: event.target.method.value,
    //   this.props.handler(this.state)
    //   }
  };

  handleChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ ...this.state, [name]: value })
  }



  render() {
    return (
      <section className="form">
        <form data-testid="apiform" onSubmit={this.onSubmit}>
          <label>
            <input data-testid="apiform" name="url" placeholder="http//..." type="text" onChange={this.handleChangeInput} />
          </label>
          <button type="submit">GO!</button>
          <div id="formButton">
            <div className="methodButton">
              <label>
                <input data-testid="get" name="method" type="radio" value="get" onChange={this.handleChangeInput} /><span>GET</span>
              </label>
            </div>
            <div className="methodButton">
              <label>
                <input data-testid="post" name="method" type="radio" value="post" onChange={this.handleChangeInput} /><span>POST</span>
              </label>
            </div>
            <div className="methodButton">
              <label>
                <input data-testid="put" name="method" type="radio" value="put" onChange={this.handleChangeInput} /><span>PUT</span>
              </label>
            </div>
            <div className="methodButton">
              <label>
                <input data-testid="delete" name="method" type="radio" value="delete" /><span>DELETE</span>
              </label>
            </div>
            <button>HIT API</button>
            <div>
              <textarea id="body" name="body" onChange={this.handleChangeInput}>
              </textarea>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Form;
