/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Name', 'Address', 'Contact'],
      widthArr: [40, 60, 80, 100]
    };
  }

  render() {
    const state = this.state;
    const data = [];
    for (let i = 0; i < 8; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 4; j += 1) {
        dataRow.push(`${i}${j}`);
      }
      data.push(dataRow);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                    
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    justifyContent:'center',
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#ffffff' ,
    alignItems: 'center',
  },
  head: { 
    justifyContent:'center',
    height: 50, 
    backgroundColor: '#00a8ff' ,

  },
  text: { 
    textAlign: 'center', 
    fontWeight: '200' ,
  },
  dataWrapper: { 
    marginTop: -1 ,
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' ,
  },
});

export default Data;
