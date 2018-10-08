import React from 'react';
import Main from './../Main'
import ActiveLink from './../ActiveLink';
import { reqEditProduct, reqUpdateProduct } from './../../modules/product/actions'
import {connect} from "react-redux";
import { withRouter } from 'next/router'

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        description: '',
        price: ''
    }
  }

  onChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };


  onSubmit = e => {
      e.preventDefault();
      const { name, description, price } = this.state;
      let { product } = this.props;
      const params = {name, description, price};
      this.props.updateProduct(product.id, params, this.props.router)
  };

  componentDidMount() {
    let product = this.props;
    this.props.editProduct(product.id)
  }

  componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.products){
          const {products} = nextProps;
          this.setState({
              name: products.product.name,
              description: products.product.description,
              price: products.product.price
          });
      }
    }

  render() {
    const { name, description, price } = this.state;
    const { products } = this.props

    return (
      <Main>
        <div className="container mb-4">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="">
                <div className="form-group">
                  <label>Name</label>
                    <input 
                      name="name"
                      type="text"
                      placeholder="Name Product"
                      className="form-control"
                      value={name}
                      onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" rows="3" placeholder="Description Product" name="description" value={description} onChange={this.onChange}></textarea>
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="Price Product"
                    className="form-control"
                    value={price}
                    onChange={this.onChange}
                  />
                </div>

                <div className="clearfix"></div>
                <div className="">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <ActiveLink name='products' className='btn btn-block btn-light'>Back</ActiveLink><br/>
                        </div>

                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-primary text-uppercase">Submit</button>
                        </div>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Main>
    );
  }
}

const mapStateToProps = state => {
    return {
        products : state.products
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditComponent));
