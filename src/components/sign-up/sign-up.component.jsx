import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email:'',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try
        {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});

            this.setState({email:'', password:''});
        }
        catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up" onSubmit={this.handleSubmit}>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign in with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} required handleChange={this.handleChange} label="Display Name"/>
                    <FormInput name="email" type="email" value={email} required handleChange={this.handleChange} label="Email"/>
                    <FormInput name="password" type="password" value={password} handleChange={this.handleChange} required label="Password"/>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange} required label="Confirm Password"/>
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;

