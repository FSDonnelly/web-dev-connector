import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ username, getGitHubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGitHubRepos, username]);
  console.log(username);
  return <div />;
};

ProfileGithub.propTypes = {
  getGitHubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(ProfileGithub);
