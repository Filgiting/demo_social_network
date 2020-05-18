import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Element} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, requiredField} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './../common/FormsControls/FormsControls.module.css';

const maxLength10 = maxLengthCreator(20);
const Input = Element('input');

const LoginForm = (handleSubmit, error) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder='Email' name='email'
                       component={Input} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field placeholder='Password' name='password' type='password'
                       component={Input} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe'
                       component={Input}/> remember me
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);