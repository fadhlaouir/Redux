import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/user-action'
// import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect';
class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);

  }
  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest()
    }, 1500)
  }
  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value)
  }

  render() {
    return (
      <div className="App">
        {/* <div onClick={this.onUpdateUser}>updateUser</div> */}
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}
const productsSelector = createSelector(
  state => state.products,
  products => products
)
const userSelector = createSelector(
  state => state.user,
  user => user
)
const mapStateToProps = createSelector(
  // state => state.products,
  productsSelector,
  // state => state.user,
  userSelector,
  (products, user) => ({
    products,
    user
  })
)
//  (state, props) => {
//   return {
//     products: state.products,
//     user: state.user,
//     userPlusProps: `${state.user} ${props.aRandomProps}`
//   }
// }
const mapActionToProps = /*(dispatch, props) =>*/ {
  // console.log(props)
  // return bindActionCreators({
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
  // }, dispatch)
}
// const mergeProps = (propsFromState, propsFromDisptach, ownProps) => {
//   console.log(propsFromState, propsFromDisptach, ownProps)
//   return {

//   }
// }
export default connect(
  mapStateToProps,
  mapActionToProps,
  // mergeProps
)(App);
