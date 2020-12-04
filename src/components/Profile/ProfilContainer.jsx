import React from 'react'
import Profile from "./Profil";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthUserId} from "../../redux/selectors";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.authUserId || null
    if(userId !== null) {
      this.props.getProfile(userId)
      this.props.getStatus(userId)
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <Profile userProfile={this.props.userProfile}
               isAuth={this.props.isAuth}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authUserId: getAuthUserId(state)
  }
}


export default compose(
  connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer)