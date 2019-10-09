import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Ya tengo una cuenta</h2>
                <span>ingresa con tu correo y contraseña</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                        label='email'
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required
                        label='password'
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Ingresar con Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;