import React from 'react'
import {connect} from 'react-redux'
import Create from './../../components/product/Create'

export default class CreatePage extends React.Component {

  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render () {
    return (
        <Create />
    )
  }
}
