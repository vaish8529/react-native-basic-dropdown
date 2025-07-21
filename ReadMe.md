A customizable dropdown picker component for React Native, designed to be lightweight and easy to use. The CustomPicker component supports dynamic item lists, custom placeholder text, and a title display. Ideal for applications requiring quick, responsive selection options with a sleek interface. Built with TypeScript for strong type-checking and enhanced development experience.

### ✨ Features:
- Customizable Items: Display a list of selectable items with labels.
- Placeholder & Title: Define a placeholder and title for clear UI guidance.
- Smooth Dropdown Toggle: Built-in animations with a chevron icon to indicate dropdown state.
- Scroll Support: List of options supports smooth scrolling, ideal for longer item lists
- TypeScript Ready: Strong typing ensures easier integration and fewer runtime errors.

## ✅ Supported Versions

| Package                          | Version(s) Supported   |
|----------------------------------|------------------------|
| `react-native`                   | `>=0.71.0`             |
| `react-native-gesture-handler`   | `^2.0.0` or later      |
| `react-native-vector-icons`      | `^9.0.0` or later      |
| `typescript`                     | `^4.0.0` or later      |

---
## 🧩 Props

| Prop           | Type                                                  | Required |Description                                              |
|----------------|-------------------------------------------------------|----------|---------------------------------------------------------|
| `title`        | `string`                                              | ✅ Yes  | The label displayed above the dropdown.                 |
| `placeholder`  | `string`                                              | ✅ Yes  | Text shown before a selection is made.                  |
| `items`        | `{ label: string; value: string }[]`                  | ✅ Yes  | Array of selectable items with label/value pairs.       |
| `onChangeItem` | `(item: { label: string; value: string }) => void`    | ✅ Yes  | Callback function triggered when an item is selected.   |

---


### 📦 Installation: 
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