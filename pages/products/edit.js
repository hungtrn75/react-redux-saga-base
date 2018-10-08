import React from 'react'
import {connect} from 'react-redux'
import Edit from './../../components/product/Edit'

export default class EditPage extends React.Component {
    static async getInitialProps ({ctx}) {
        const { query } = ctx;
        return query.id
    }

    render (props) {
        return (
             <Edit id={this.props[0]} />
        )
    }
}
