import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import CustomInput from './component/custominput';
import { CheckEvenNumber, ValidateEmail,ValidatePassword, } from './component/utilityFunctions';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      isdisplay: false,
      isequal: false,
      isshow:false,
      isvalidation: false,
      isempty: false,
      input: '',
      arr:[]
    };
  }
  componentDidMount() { 
    const number = 12;
    const check = CheckEvenNumber(number);
    // console.log('check-->', check);
    const text = 11;
    // const checkNumber=number%2===0?"even":"odd"//conditional value sa pakarathu ternary
    // console.log("checkNumber-->",checkNumber)
    // const storeResult=checkNumber==="even"&&"the given number is even"
    // console.log("storeResult-->",storeResult)
    // const text = 11;
    // const processedTwoNumbers=ValidateNumbers(10,5)
    // console.log("processedTwoNumbers",processedTwoNumbers)


  }

  handleUserNameInput = (values) => {
    console.log('val--->', values.length);

    if (values.length <= 8) {
      this.setState({ name: values });
    }
  };

  handleEmailInput = (text) => {
    // console.log('values--->', typeof text);
    
let email= ValidateEmail(this.state.email)
    this.setState({ email: text })

  };

  handlePasswordInput = (values) => {

    this.setState({ password: values });
    
    this.setState({});
  
  };

  handleLogin = () => {
    let emailValidate = ValidateEmail(this.state.email)
    let passwordValidation=ValidatePassword(this.state.password)
    
      this.state.isshow=emailValidate
      this.setState({isshow:emailValidate})
      console.log("isshow",this.state.isshow)
      this.state.isdisplay=emailValidate
    
      this.state.isempty = passwordValidation;

      this.setState({isempty: passwordValidation})
       this.setState({isvalidation: passwordValidation})
      
  };
  handleInput = (values) => {
    console.log('pressed', values);
  };

  render() {
    
    return (
      <View style={styles.container}>
        <CustomInput
          borderWidth={0}
          borderRadius={10}
          placeholder={'User Name'}
          value={this.state.name}
          onChangeText={(text) => this.handleUserNameInput(text)}></CustomInput>
        <CheckEvenNumber email={this.state.email} />
        <CustomInput
          borderWidth={4}
          borderRadius={10}
          borderColor={this.state.isequal ? 'red' : 'white'}
          placeholder="Enter email id"
          value={this.state.email}
          onChangeText={(text) => this.handleEmailInput(text)}>
          // console.log("validation",EmailValidation)
        </CustomInput> 

            {(//true va iruntha rendaiyum paakum 
            //false saa iruntha athuku mela paakathu 
              <View>
      
            <Text style={{ fontSize: 10, textAlign: 'center', color: 'red' }}>
              {this.state.isdisplay}
            </Text>
 </View>||this.state.isdisplay
          ) }
          {this.state.isshow ===true?
           <View style={{ backgroundColor:'yellow', }}>
      
            <Text style={{ fontSize: 10, textAlign: 'center', color: 'red' }}>
              {'invalid email'}
            </Text>
            </View>:null
            }
          
       
       
        <CustomInput
          borderWidth={4}
          borderRadius={10}
          borderColor={this.state.isempty ? 'red' : 'white'}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={(text) => this.handlePasswordInput(text)}></CustomInput>

        <View style={{ flex: 0.03 }}>
          {this.state.isvalidation ===true ? (
            <Text style={{ fontSize: 10, textAlign: 'center', color: 'red' }}>
              {'Password is only 8 characters long'}
            </Text>
          ) : null}
          
        <Text style={{ fontSize: 10, color: 'red', textAlign: 'center' }}>
              {this.state.isempty}
            </Text>
        </View>
        <View style={{ flex: 0.08, }}>
          <TouchableOpacity style={{ flex: 0.5 }}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 5,
              }}>
              {'forgot password ?'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1 ,alignItems:"center"}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              flex: 0.75,
              borderRadius: 10,
              
            }}
            onPress={() => this.handleLogin()}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                marginTop: 5,
              }}>
              {'LogIn'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.08,
            backgroundColor: 'blue',
            borderRadius: 10,
            justifyContent: 'center',
            marginTop: 20,
            borderWidth: 1,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{}}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
              {'Create New Account'}
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0.1,
  },
  textInput: {
    backgroundColor: 'lightblue',
    borderWidth: 1,
    flex: 0.9,
    borderRadius: 10,
    // borderColor:"red",
    textAlign: 'center',
  },
});
// {this.state.isequal ? <Text style={{fontSize:10,textAlign:"center",color:"red"}}>{"Please include an '@' in the email address" }</Text> : null}
// // <Validation email={this.handleEmailInput}


 // {this.state.isempty ? (
          //   <Text style={{ fontSize: 10, color: 'red', textAlign: 'center' }}>
          //     {'invalid password'}
          //   </Text>
          // ) : null}
