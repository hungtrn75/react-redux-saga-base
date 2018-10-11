import React from 'react'
import {connect} from 'react-redux'
import List from './../../components/product/List'

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
