A customizable dropdown picker component for React Native, designed to be lightweight and easy to use. The CustomPicker component supports dynamic item lists, custom placeholder text, and a title display. Ideal for applications requiring quick, responsive selection options with a sleek interface. Built with TypeScript for strong type-checking and enhanced development experience.

### Features:
- Customizable Items: Display a list of selectable items with labels.
- Placeholder & Title: Define a placeholder and title for clear UI guidance.
- Smooth Dropdown Toggle: Built-in animations with a chevron icon to indicate dropdown state.
- Scroll Support: List of options supports smooth scrolling, ideal for longer item lists
- TypeScript Ready: Strong typing ensures easier integration and fewer runtime errors.

### Installation: 
```bash
npm install custom-picker-component
```
### Usage:
```bash
import CustomPicker from 'custom-picker-component';

<CustomPicker
  title="Select an Option"
  placeholder="Choose..."
  items={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}
  onChangeItem={(item) => console.log('Selected item:', item)}
/>
```