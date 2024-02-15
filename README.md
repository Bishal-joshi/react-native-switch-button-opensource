# React Native Custom Switch Component

A customizable React Native Switch Component

## Installation

Install the package using npm or yarn:

```bash
npm i react-native-switch-button-opensource

```
## Usage

```javascript
import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Switch from 'react-native-switch-button-opensource';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (newState) => {
    setIsOn(newState);
    // Add your additional logic here
  };

  return (
    <View style={styles.container}>
      <Switch isOn={isOn} handleToggle={handleToggle} />
    
      <Text style={styles.label}>{isOn ? 'On' : 'Off'}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default App;
```

## Props

### Required Props
1. isOn: boolean value for on/off state of switch
2. handleToggle: a call back function to change state of switch


# License
This project is licensed under the MIT License - see the LICENSE file for details. Feel free to further customize the code according to your project's specifics.
