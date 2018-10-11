import React from 'react';
import Main from './../Main'
import Http from './../../utils/Http';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reqFetchProducts, reqDeleteProduct } from './../../modules/product/actions'
import { translate } from 'react-i18next'
import { compose } from 'redux'
import ActiveLink from './../ActiveLink';
import Link from 'next/link'

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    onDelete = id => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) {
            this.props.deleteProduct(id);
        }
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
                            <td><ActiveLink className='' name='edit_product' params={{id: product.id}}>Edit</ActiveLink></td>
                            <td><Link href="javascript:;"><a onClick={() => this.onDelete(product.id)}>Delete</a></Link></td>
                        </tr>
                    );
                });
            }
            return result;
        }

        return (
            <Main>
                <h2>{ t('common:list') }</h2>
                <ActiveLink name='create_product' className='btn btn-block btn-light col-md-3'>Create</ActiveLink>
                <br/>
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
                        { products.products.length > 0 ? showProducts(products.products) : 
                        <tr>
                            <td className="table-bitterz__no-record" colSpan="4">No Product</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </Main>
        );
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
)(List);
