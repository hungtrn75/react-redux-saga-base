import React from 'react'
import {connect} from 'react-redux'
import Edit from './../../components/product/Edit'
import Head from './../../components/Seo';
import { reqEditProduct, reqUpdateProduct } from './../../modules/product/actions';
import { productsSelector } from './../../modules/product/selectors';

class EditPage extends React.Component {
    static async getInitialProps ({ctx}) {
        const { query } = ctx;

        return {
            id: query.id
        }
    }

    render (props) {
        const {product} = this.props.products;
        const renderHead = product && Object.keys(product).length > 0 && (
            <Head 
                object={
                    [
                        {
                            key: 'title',
                            content: product.name
                        },
                        {
                            key: 'description',
                            title: 'name',
                            content: product.name
                        },
                        {
                            key: 'og:title',
                            title: 'property',
                            content: product.name
                        },
                        {
                            key: 'og:description',
                            title: 'property',
                            content: product.description
                        },
                        {
                            key: 'site_name',
                            title: 'property',
                            content: 'anything',
                        },
                        {
                            key: 'og:type',
                            title: 'property',
                            content: 'anything'
                        },
                        {
                            key: 'og:image',
                            title: 'property',
                            content: 'anything'
                        }
                    ]
                }
            ></Head>
        );

        return (
            <div>
                {renderHead}
                <Edit
                    id={this.props.id}
                    product={this.props.products}
                    editProduct={this.props.editProduct}
                    updateProduct={this.props.updateProduct}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : productsSelector(state)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editProduct: (id) => {
            dispatch(reqEditProduct(id));
        },
        updateProduct: (id, product, router) => {
            dispatch(reqUpdateProduct(id, product, router));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
