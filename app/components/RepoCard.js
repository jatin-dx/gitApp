import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: 1,
    padding: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  repoTypeIcon: {
    width: 30,
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: '#0063d9',
  },
  descriptionWrapper: {
    paddingLeft: 30,
  },
  subDetailWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  subDetail: {
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
  },
  languageIcon: {
    borderRadius: 10,
    width: 10,
    height: 10,
    backgroundColor: '#f2e14e',
    marginRight: 5,
  },
  detailIcon: {
    marginRight: 5,
  }
});

const RepoCard = ({ data: { description, full_name, language, stargazers_count, fork } }) => (
  <View style={styles.container}>
    <View style={styles.titleWrapper}>
      <View style={styles.repoTypeIcon}>
        <Icon name={fork ? 'repo-forked' : 'repo'} size={20} />
      </View>
      <Text style={styles.title}>{full_name}</Text>
    </View>
    <View style={styles.descriptionWrapper}>
      {description ? <Text>{description}</Text> : null }
      <View style={styles.subDetailWrapper}>
        <View style={styles.subDetail}>
          <Icon name='star' size={20} style={styles.detailIcon}/>
          <Text>{stargazers_count}</Text>
        </View>
        <View style={styles.subDetail}>
          <View style={styles.languageIcon}></View>
          <Text>{language}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default RepoCard;