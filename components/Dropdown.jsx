import { TouchableOpacity, View, Text } from "react-native";
import { dropDownStyles } from "../styles/DropDownStyles";

export const DropDown = ({ options, onSelect, isOpen, setIsOpen, type, value }) => {

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <View style={dropDownStyles.container}>
            <TouchableOpacity onPress={toggleDropdown}>
                <Text>{(type ? type : "Player Type...") || (value ?? value)}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View>
                    {/* dropdown options */}
                    {options.map((option) => (
                        <TouchableOpacity style={dropDownStyles.container} key={option.value} onPress={() => onSelect(option)}>
                            <Text>{option.label}</Text>

                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );

}