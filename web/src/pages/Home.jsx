import React from 'react';
import { Form } from 'antd';
import Map from '../components/Map';
import InputForm from '../components/InputForm';
import { getScooters } from '../actions/api';
import styles from './Home.module.css';

class Home extends React.Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div>
        <InputForm
          onSubmit={values => getScooters(values).then(data => this.setState({ data }))}
          className={styles.form}
        />
        <Map markers={this.state.data} />
      </div>
    );
  }
}

export default Form.create()(Home);
