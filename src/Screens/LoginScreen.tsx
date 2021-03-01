import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import MainStyle from '../assets/css/main';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default function LoginScreen(props: any) {
  const NextPage = (props: any) => {
    console.log('NextPage')
  }
  return (
    <>
      <View style={MainStyle.Auth}>
        <View style={{textAlign: "left"}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Start')}>
          <Text>Back</Text>
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 45, marginTop: 30}}>Let's sign you in</Text>
          <Text style={{fontSize: 25}}>Welcome Back.</Text>
          <Text style={{fontSize: 25, paddingBottom: 40}}>You've been missed</Text>
        </View>
      </View>
      <View style={MainStyle.mainLogin}>
        <View style={MainStyle.form}>
          <View>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
          </View>
          <View>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </View>
        </View>
        <View style={MainStyle.Footer}>
          <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
              <Text style={{ marginBottom: 10, textAlign: 'center' }}>Don't have an account yet?
                  <Text style={{fontWeight: 'bold'}}> Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={MainStyle.Button}>
            <Text style={MainStyle.ButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
