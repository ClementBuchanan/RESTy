
import React from 'react';
import './form.css';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // urls: [],
      // Methods: [],
      methodValue: 'get',
      classValue: 'getButton',
      input: '',
      requestInput: '',
      // methodClass: [],
      Get: 'getButton',
      Post: 'plain',
      Put: 'plain',
      Delete: 'plain',
    }
  }

  //adding url and methods
  // addUrlAndMethods = () => {
  //   this.setState({
  //     urls: [this.state.input, ...this.state.Url],
  //     methods: [this.state.methidValue, ...this.state.Method],
  //     methodClass: [this.state.classValue, ...this.state.methodClass],
  //   });
  // };

  handleMethodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.terget.value });
  }

  methodChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // this.setState({ methodValue: e.target.value });
    // this.setState({ classValue: `${e.target.value}Button` });
    if (e.target.value === 'get') {
      this.setState({
        Get: 'getButton',
        Post: 'plain',
        Put: 'plain',
        Delete: 'plain',
        methodValue: e.target.value,
        classValue: `${e.target.value}Button`,
      });
    } else if (e.target.value === 'post') {
      this.setState({
        Get: 'plain',
        Post: 'postButton',
        Put: 'plain',
        Delete: 'plain',
        methodValue: e.target.value,
        classValue: `${e.target.value}Button`,
      });
    } else if (e.target.value === 'put') {
      this.setState({
        Get: 'plain',
        Post: 'plain',
        Put: 'putButton',
        Delete: 'plain',
        methodValue: e.target.value,
        classValue: `${e.target.value}Button`,
      });
    } else if (e.target.value === 'delete') {
      this.setState({
        Get: 'plain',
        Post: 'plain',
        Put: 'plain',
        Delete: 'deleteButton',
        methodValue: e.target.value,
        classValue: `${e.target.value}Button`,
      });
    }
  }


  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleRequestChange = (e) => {
    this.setState({ requestInput: e.target.value });
  }

  // methodChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ methodValue: e.target.value });
  // }

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await superagent.get(this.state.input);

    let data = response.body;
    let headerData = response.header;
    let historyItem = {
      result: response,
      url: this.state.input,
      method: this.state.methodValue,
      requestBody: this.state.requestInput,
      methodClass: this.state.methodClass,
    }
    this.props.updateResults(data, headerData, historyItem);
    this.setState({ input: '' });
  }



  render() {
    return (
      <div>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label>Enter REST API URL Here: <br />
            <input className="urlEntry" onChange={this.handleChange} type='text' value={this.state.input} />
          </label>
          <br />
          <label className="ChoiceofMethod">Choice of Method: <br />
            <button className={this.state.Get} value="get" onClick={this.methodChange}>GET</button>
            <button className={this.state.Post} value="post" onClick={this.methodChange}>POST</button>
            <button className={this.state.Put} value="put" onClick={this.methodChange}>PUT</button>
            <button className={this.state.Delete} value="delete" onClick={this.methodChange}>DELETE</button>
            <label>Request Body: <br />
              <textarea className="textarea" value={this.state.requestInput} onChange={this.handleRequestChange} />
            </label>
            <input className="submit" type="submit" value="submit" onClick={this.addUrlAndMethod} />
          </label>
        </form>
        <div className="recent-route">
          <h3 className="history-title">Recent Routes</h3>
        </div>
      </div>
    )
  }
}

export default Form;
