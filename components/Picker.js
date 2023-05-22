import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Picker = () => {
  const [currency, setCurrency] = useState("US Dollar");
  const [pirorties, setPirority] = useState("Peformance");

  return (
    <View style={styles.container}>
      <View style={styles.viewStyle}>
        <Text style={styles.formLabel}> Energy savings form </Text>
      </View>

      <View>
        {/* <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
        /> */}

        <Text style={styles.formLabel}>
          Most important when choosing an Applicance?
        </Text>
        <Picker
          selectedValue={pirorties}
          onValueChange={(currentPirority) => setPirority(currentPirority)}
        >
          <Picker.Item label="Performance" value="Peformance" />
          <Picker.Item label="Ticket Price" value="TicketPrice" />
          <Picker.Item label="Efficiency" value="Efficiency" />
        </Picker>

        <Picker
          selectedValue={currency}
          onValueChange={(currentCurrency) => setCurrency(currentCurrency)}
        >
          <Picker.Item
            style={styles.pickerItem}
            label="USD"
            value="US Dollars"
          />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="NGN" value="Naira" />
        </Picker>
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Selected: {currency}
        </Text>
        <Button
          title="Submit"
          color="#fff"
          onPress={() => alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderBottomWidth: 25, // whatever width you want of underline
    borderBottomColor: "#00000000",
  },

  container: {
    flex: 1,
    backgroundColor: "#356859",
    alignItems: "center",
    justifyContent: "center",
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#b9e4c9",
  },

  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },

  text: {
    color: "#fff",
    fontSize: 20,
    borderBottomWidth: 10,
  },

  pickerItem: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Picker;
