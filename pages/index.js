import React from 'react'
import {connect} from 'react-redux'
import List from './../components/product/List'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class Index extends React.Component {

  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render () {
    return (
        <List />
    )
  }
}
