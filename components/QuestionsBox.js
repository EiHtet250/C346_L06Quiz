import React from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// Re-usable component to display one question
const QuestionBox = ({imageUrl, question, options, selected, onValueChange}) => {
    return (
        <View style={{marginBottom: 15}}>
            <Image source={{uri: imageUrl}} style={{width: '100%', height: 200}} />
            <Text style={{fontSize: 18, marginTop: 10}}>{question}</Text>

            {/* Green option box */}
            <View style={{backgroundColor: 'purple'}}>
                <Picker
                    selectedValue={selected}
                    onValueChange={onValueChange}
                    style={{color: 'white'}}
                    dropdownIconColor="white">
                    {options.map((option) => (
                        <Picker.Item key={option} label={option} value={option} color="green" />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default QuestionBox;