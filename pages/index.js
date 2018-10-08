import React from 'react'
import {connect} from 'react-redux'
import List from './../components/product/List'
import ActiveLink from './../components/ActiveLink';
import Main from './../components/Main';

export default class Index extends React.Component {

  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render () {
    return (
    	<Main>
	        <span>This is Home Page</span><br/>
			    <ActiveLink name='products'>Products</ActiveLink>
  		</Main>
    )
  }
}
