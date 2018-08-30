import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchCategories, setSorting, setCommentSorting } from '../actions'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class PostDetail extends Component {
  render () {
    return [
        <h1 key='1'>PostDetail</h1>,
        <p key='2'>This is the post detail page</p>
      ]
  }

}
const mapStateToProp = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProp)(PostDetail)