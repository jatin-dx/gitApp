import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import RepoCard from '../components/RepoCard';
import { getRepoData } from '../redux/actions/repoActions';

class Repos extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRepoData();
  }

  render() {
    const { repos } = this.props;
    return (
      <ScrollView>
        {repos && repos.length
          ? repos.map(r => (
            <RepoCard
              key={r.id}
              data={r}
            />
          ))
          : null
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  repos: state.repo.repos,
})

const mapDispatchToProps = (dispatch) => ({
  getRepoData: (data) => dispatch(getRepoData(data)),
  dispatch,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repos);