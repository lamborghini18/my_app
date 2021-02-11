import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { setUsersProfile } from '../../redux/profile_reduсer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		usersAPI.getProfileUsers(userId).then(data => {

			this.props.setUsersProfile(data)

		});
	}

	render() {

		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

let WithUrlDataConteinerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataConteinerComponent);
