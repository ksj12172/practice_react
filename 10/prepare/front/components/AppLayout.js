import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/Link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align:middle;
`

const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton></SearchInput>
                    {/* <Input.Search enterButton style={{verticalAlign:'middle'}}/> */}
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children} </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.zerocho.com" target="_blank"
                        rel="noreferrer noopener">Made by ZeroCho</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children:PropTypes.node.isRequired,
}
export default AppLayout;