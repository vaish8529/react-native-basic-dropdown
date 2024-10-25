import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';

const CustomPicker = (props, ref) => {
  const [showOption, setShowOption] = useState(false);

  const onSelectedItem = (val) => {
    setShowOption(false);
    props.onChangeItem(val);
  };

  return (
    <View ref={ref}>
      <Text style={[styles.title, styles.pdb4]}>
        {props.title}
      </Text>
      <TouchableOpacity
        style={styles.fullWidth}
        activeOpacity={0.8}
        onPress={() => setShowOption(!showOption)}
      >
        <Text style={styles.title}>
          {props.placeholder}
        </Text>
        {showOption ? (
          <Icon name="chevron-up" size={20} color="#656565" />
        ) : (
          <Icon name="chevron-down" size={20} color="#656565" />
        )}
      </TouchableOpacity>
      {showOption && (
        <View style={styles.dropdownInnerBox}>
          <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} nestedScrollEnabled>
            {props.items.map((val, i) => (
              <TouchableOpacity
                key={String(i)}
                onPress={() => onSelectedItem(val)}
                style={styles.dropdownInnerTextTouchable}
              >
                <Text style={styles.title}>{val.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CustomPicker;
