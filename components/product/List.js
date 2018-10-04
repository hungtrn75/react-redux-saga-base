import React from 'react';
import Main from './../Main'
import Http from './../../utils/Http';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reqFetchProducts } from './../../modules/product/actions'
import { translate } from 'react-i18next'
import { compose } from 'redux'

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products, t } = this.props;
    let showProducts = (products) =>{
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <tr key={ index }>
                        <td>{ product.name }</td>
                        <td>{ product.description }</td>
                        <td>{ product.price }</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                );
            });
        }
        return result;
    }

    return (
      <Main>
        <h2>{ t('common:list') }</h2>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { products.length > 0 ? showProducts(products) : <tr><td className="table-bitterz__no-record" colSpan="4">No Product</td></tr> }
            </tbody>
          </table>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProducts: () => {
            dispatch(reqFetchProducts());
        }
    }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  translate(['common'])
)(List);
