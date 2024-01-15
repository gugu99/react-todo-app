import React, { useState } from "react";
import {Button, Col, Input, Row} from 'antd';

function Register() {
    //닉네임
    const [name, setName] = useState('');
    //이메일? id?
    const [id, setId] = useState('');
    //비밀번호
    const [pw, setPw] = useState('');

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    }

    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);
    }

    const onChangePw = (e) => {
        const pw = e.target.value;
        setPw(pw);
    }

    const submit = () => {
        console.log('Submit:', { name, id, pw });
    }

    return (
        <Row>
            <Col md={8}>
                <Input placeholder="닉네임" onChange={onChangeName}/>
                <Input placeholder="아이디" onChange={onChangeId}/>
                <Input placeholder="비밀번호" type="password" onChange={onChangePw}/>
                <Button type="primary" onClick={submit}>회원가입</Button>
            </Col>
        </Row>
    );
}

export default Register;