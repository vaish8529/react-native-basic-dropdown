import React, { forwardRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';
import DropdownItem from './DropdownItem';

interface Item {
	label: string;
	value: string;
}

interface CustomPickerProps {
	title: string;
	placeholder: string;
	items: Item[];
	onChangeItem: (item: Item) => void;
}

const CustomPicker = forwardRef<View, CustomPickerProps>(({ title, placeholder, items, onChangeItem }, ref) => {
	const [showOption, setShowOption] = useState(false);

	const onSelectedItem = (val: Item) => {
		setShowOption(false);
		onChangeItem(val);
	};

	return (
		<View ref={ref}>
			<Text style={[styles.title, styles.pdb4]}>{title}</Text>
			<TouchableOpacity
				style={styles.fullWidth}
				activeOpacity={0.8}
				onPress={() => setShowOption((prev) => !prev)}
				accessible
				accessibilityLabel={placeholder}
				accessibilityRole="button"
			>
				<Text style={styles.title}>{placeholder}</Text>
				<Icon name={showOption ? 'chevron-up' : 'chevron-down'} size={20} color="#656565" />
			</TouchableOpacity>
			{showOption && (
				<View style={styles.dropdownInnerBox}>
					<ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} nestedScrollEnabled>
						{items.map((val, i) => (
							<DropdownItem
								key={val.label + i}
								label={val.label}
								onPress={() => onSelectedItem(val)}
							/>
						))}
					</ScrollView>
				</View>
			)}
		</View>
	);
});

export default CustomPicker;