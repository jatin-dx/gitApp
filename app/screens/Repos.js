import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import RepoCard from '../components/RepoCard';
import { getRepoData } from '../redux/actions/repoActions';

class Repos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  componentDidMount() {
    this.props.getRepoData();
  }

  onSearchTextChange = (searchText) => {
    this.setState({ searchText })
  }

  render() {
    const { repos } = this.props;
    const { searchText } = this.state;
    const regex = new RegExp(searchText, 'i');
    const filteredRepos = repos.filter(({full_name}) => full_name.match(regex));
    return (
      <ScrollView>
        <TextField
          label='Search'
          value={searchText}
          onChangeText={this.onSearchTextChange}
          containerStyle={{
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
        {filteredRepos && filteredRepos.length
          ? filteredRepos.map(r => (
            <RepoCard
              key={r.id}
              data={r}
            />
          ))
          : <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>No Repos Found!!</Text>
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