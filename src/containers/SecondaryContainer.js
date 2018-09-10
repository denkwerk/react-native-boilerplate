import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

class SecondaryContainer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.heading}>Secondary screen</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  heading: { fontWeight: 'bold', marginLeft: 10 },
});

const mapStateToProps = state => {
  return {
    lists: state.lists,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryContainer);
