import React from 'react';
import Main from './../Main'

export default class Create extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main>
        <div className="container mb-4">
          <div className="row">
            <form>
              <div className="">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Name</label>
                  <input type="input" name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Description</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Price</label>
                  <input type="input" name="price" className="form-control" />
                </div>

                <div className="clearfix"></div>
                <div className="">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <button className="btn btn-block btn-light">Cancel</button>
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
