import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchCategories, setSorting, setCommentSorting } from '../actions'
// import { Link } from 'react-router-dom'
// import '../styles/app.css'

class Home extends Component {
  render () {
    return [
        <h1 key='1'>Home</h1>,
        <p key='2'>This is the home page</p>
      ]
  }

}
const mapStateToProp = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProp)(Home)