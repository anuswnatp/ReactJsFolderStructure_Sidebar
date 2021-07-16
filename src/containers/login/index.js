/* eslint-disable no-extend-native */
import React, { useState } from 'react';
import InputBox from '@components/reusable/inputBox/inputBox.js';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';

function Login() {
    const cardFooter = ()=>(
        <div className={styles.login_card_footer}>
            <Link to='/'>Forgot username or password?</Link>
            <Button label='Login'/>
        </div>
    );
    const cardHeader = ()=>(
        <div className={styles.login_card_header}>
            <Avatar icon='pi pi-user' shape='circle' size='xlarge'/>
            <h2>Admin Panel</h2>
        </div>
    );
    const [inputTexts, setinputTexts] = useState({
        userName: {
            value: '',
            errMsg: '',
            regex: '',
            id: 'username_1',
            label: 'user name'
        },
        pass: {
            value: '',
            errMsg: '',
            regex: '',
            id: 'pass_1',
            label: 'password'
        }
    });
    const onChangeHandler = (event, k)=>{
        let data = JSON.parse(JSON.stringify(inputTexts));
        data[k].value = event.target.value;
        let regex;
        const decider = ( regex, msg )=>{
            if (regex.test(data[k].value)) {
                data[k].errMsg = '';
            } else {
                data[k].errMsg = msg;
            }
        };
        if (k === 'userName') {
            regex = /^[a-zA-Z0-9]+$/;
            decider(regex, 'please check your user name');
        } else if (k === 'pass') {
            regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (data[k].value) {
                // eslint-disable-next-line max-len
                decider(regex, 'please check your password as min 8 letter password, with at least a symbol, upper and lower case letters and a number');
            } else {data[k].errMsg = 'Please enter password';}
        }
        setinputTexts(data);
    };
    return (<div className={styles.login_page}>
        <Card className={styles.login_card} footer={cardFooter} header={cardHeader}>
                <InputWrapper inputTexts={inputTexts} k='userName' onChangeHandler={(e, k)=>onChangeHandler(e, k)} />
                <InputWrapper inputTexts={inputTexts} k='pass' onChangeHandler={(e, k)=>onChangeHandler(e, k)}/>
        </Card>
    </div>);
}

export default Login;

 const InputWrapper = ({k, inputTexts, onChangeHandler}) => {
    if (k) {
        return (<InputBox
        className={styles.input_span}
        errMsg={inputTexts[k].errMsg || ''}
        id={inputTexts[k].id}
        label={inputTexts[k].label}
        onChange={e=>onChangeHandler(e, k)}
        size='lg'
        type='basic'
        validateOnly={true}
        value={inputTexts[k].value || ''}
        />);
    } else {return <div/>;}
};

Array.prototype.removeIndex = function(from, to) {
    var rest = this.splice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };
