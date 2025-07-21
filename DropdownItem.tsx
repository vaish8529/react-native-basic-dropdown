import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

interface DropdownItemProps {
    label: string;
    onPress: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.dropdownInnerTextTouchable}
        accessible
        accessibilityLabel={label}
        accessibilityRole="button"
    >
        <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
);

export default DropdownItem; 