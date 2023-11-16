import React, {useState} from "react";
import { Button, Col, Input, Row } from 'antd';
import axios from 'axios';

function App() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onchangeId = (e) => {
    const id = e.target.value;
    setId(id);
  };

  const onchagePw = (e) => {
    const pw = e.target.value;
    setPw(pw);
  }

  const submit = async () => {
    const data = {username: id, password: pw}

    const result = (await (axios.post("http://localhost:8080/api/login", data))).data;
    console.log("result", result);
  }

  return (
    <Row>
      <Col md={8}>
        <Input placeholder="아이디"  onChange={onchangeId}/>
        <Input style={{marginTop:"1rem"}} type="password" placeholder="비밀번호"  onChange={onchagePw}/>
        <Button style={{float:"right", marginTop:"1rem"}} type="primary" onClick={submit}>로그인</Button>
      </Col>
    </Row>
  );
}

export default App;
