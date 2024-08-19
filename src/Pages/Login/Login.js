import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./Login.css";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            setLoading(true);
            await login(values.email, values.password);
            navigate("/admin");
        } catch (error) {
            console.error("Failed to log in", error);
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
