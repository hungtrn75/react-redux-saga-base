import React from 'react'
import {connect} from 'react-redux'
import Create from './../../components/product/Create'
import { reqCreateProduct } from './../../modules/product/actions'

class CreatePage extends React.Component {

  	static getInitialProps ({ store, isServer }) {
    	return { isServer }
  	}

  	render () {
    	return (
        	<Create product={this.props}/>
    	)
  	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => {
    return {
        createProduct: (product, router) => {
            dispatch(reqCreateProduct(product, router));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);
