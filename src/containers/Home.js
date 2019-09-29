import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';

import {connect} from 'react-redux';
import {fetchUsers} from '../redux/actions/test';
import PropTypes from 'prop-types';
import {PureComponent} from 'react';
import React from 'react';

class Home extends PureComponent {
  componentDidMount() {
    const {fetchUsers} = this.props;
    fetchUsers();
  }

  renderItemList = ({item}) => {
    const {name = {}, picture = {}} = item;
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        {picture.thumbnail ? (
          <Image
            source={{uri: picture.thumbnail}}
            style={{width: 50, height: 50, backgroundColor: '#eee'}}
            resizeMode={'cover'}
          />
        ) : null}
        <Text style={{padding: 10, marginLeft: 10}}>
          {name.first} {name.last}
        </Text>
      </View>
    );
  };

  render() {
    const {test} = this.props;
    const {data = {}} = test || {};
    const {results = []} = data;
    return (
      <SafeAreaView>
        <FlatList
          data={results}
          renderItem={this.renderItemList}
          keyExtractor={(item, index) => `item-${index}`}
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  test: PropTypes.object,
};

const mapStateProps = ({test}) => {
  return {test};
};

export default connect(
  mapStateProps,
  {fetchUsers},
)(Home);
