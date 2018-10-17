import React from 'react'
import {connect} from 'react-redux'
import List from './../../components/product/List'
import { compose } from 'redux'
import { translate, withNamespaces } from 'react-i18next'
import { reqFetchProducts, reqDeleteProduct } from './../../modules/product/actions'

class Index extends React.Component {

  	static getInitialProps ({ store, isServer }) {
    	return { isServer }
  	}

  	render () {
    	return (
        	<List products={this.props}/>
    	)
  	}
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProducts: () => {
            dispatch(reqFetchProducts());
        },
        deleteProduct: (id) => {
            dispatch(reqDeleteProduct(id));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    translate(['common'])
)(Index);
