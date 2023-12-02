/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/DataGrid';

const Column = ({data}) => {
  return <FlatList data={data} renderItem={renderColumnText} horizontal />;
};

const renderColumnText = ({item}) => {
  return (
    <View style={styles.columnItemStyle}>
      <Text>
        <Text style={styles.columnHeaderstyle}>{item}</Text>
      </Text>
    </View>
  );
};

const RowsWithPagination = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRow, setCurrentRow] = useState(
    data.find(row => {
      return row.page === currentPage;
    }),
  );

  const onNextPress = () => {
    setCurrentPage(currentPage + 1);
    setCurrentRow(
      data.find(row => {
        return row.page === currentPage + 1;
      }),
    );
  };
  const onPrevPress = () => {
    setCurrentPage(currentPage - 1);
    setCurrentRow(
      data.find(row => {
        return row.page === currentPage - 1;
      }),
    );
  };

  return (
    <>
      {currentRow?.data.map(row => {
        return (
          <FlatList
            data={row}
            renderItem={item => <RowItem item={item} />}
            horizontal
          />
        );
      })}
      <View style={styles.footerStyle}>
        <Text onPress={onPrevPress}>{'< Prev'}</Text>
        <Text style={styles.pageinfoStyle}>{`Page ${currentPage}`}</Text>
        <Text onPress={onNextPress}>{'Next > '}</Text>
      </View>
      <View style={styles.footerStyle}>
        <Text>{`Showing ${currentRow?.count} items`}</Text>
      </View>
    </>
  );
};
const RowItem = ({item}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, onChangeText] = useState(item.item);

  return (
    <TouchableOpacity
      style={styles.rowItemStyle}
      onPress={() => {
        console.log('edit here');
        setIsEditing(true);
      }}>
      <Text>
        {isEditing ? (
          <View style={{width: 100}}>
            <TextInput
              onChangeText={text => onChangeText(text)}
              value={text}
              onSubmitEditing={() => {
                setIsEditing(false);
              }}
            />
          </View>
        ) : (
          <Text style={{color: '#629CE9'}}>{text}</Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

const DataGrid = ({columns, dataWithPaginationInfo}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titelStyle}>Data Grid Example</Text>
        <Column data={columns} />
        <RowsWithPagination data={dataWithPaginationInfo} />
      </View>
    </>
  );
};

export default DataGrid;
