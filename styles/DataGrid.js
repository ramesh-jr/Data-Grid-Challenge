import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {padding: 16, margin: 16},
  footerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'space-between',
    padding: 8,
  },
  rowItemStyle: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#6457F4',
    flex: 1,
    width: 65,
  },
  columnItemStyle: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#6457F4',
    flex: 1,
    width: 65,
    backgroundColor: '#AAA3F9'
  },
  columnHeaderstyle: {color: '#610021'},
  pageinfoStyle: {
    paddingHorizontal: 4,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  titelStyle: {padding: 12}
});
