import React from 'react';
import './form.css';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      url: '',
      method: '',
    }
  }
  onSend = async (event) => {
    event.preventDefault();

    await this.setState({
      url: event.target.url.value,
      method: event.target.method.value,
    });

    this.props.updateResults({ ...this.state });
  }

  render() {
    return (
      <section className="form">
        <form onSubmit={this.onSend}>
          <label>URL:</label>
          <input id="urlInput" name="url" type='text' />
          <button type="submit">GO!</button>
          <div id="formButton">
            <div className="methodButton">
              <label>
                <input name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="methodButton">
              <label>
                <input name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="methodButton">
              <label>
                <input name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="methodButton">
              <label>
                <input name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Form;
