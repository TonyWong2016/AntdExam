'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, QuestionCircleOutlined, SettingOutlined, FormOutlined, SignatureOutlined, LoginOutlined, BellOutlined, SmileOutlined, CodeOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, message, notification } from 'antd';



const items: MenuProps['items'] = [
    {
        label: '认证说明',
        key: 'introduce',
        icon: <QuestionCircleOutlined />,
        onClick: () => {

        }
    },
    {
        label: '信息填写',
        key: 'form',
        icon: <FormOutlined />,
        //disabled: true,
    },
    {
        label: '刷题',
        key: 'practice',
        icon: <SignatureOutlined />,
        children: [
            {
                //type: 'group',
                label: (<a href="https://ant.design" target="_blank" rel="noopener noreferrer">广东省青少年编程教育指导师</a>),
                key: 'type1',
                icon: <CodeOutlined></CodeOutlined>
            },
            {
                //type: 'group',
                label: (<a href="https://ant.design" target="_blank" rel="noopener noreferrer">广东省幼儿科技教育指导师</a>),
                key: 'type2',
                icon: <CodeSandboxOutlined></CodeSandboxOutlined>
            },
        ],
    },
    {
        label: '考试',
        key: 'exam',
        icon: <BellOutlined />,
        //disabled: true,
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                登录
            </a>
        ),
        key: 'login',
        icon: <LoginOutlined />,

    },
];

interface HeaderStyle {
    display: string;
    alignItems: string;
    theme: MenuTheme | undefined;
}

const HeaderNav: React.FC<HeaderStyle> = (style) => {
    const [api, contextHolder] = notification.useNotification();
    const [current, setCurrent] = useState('introduce');
    //message.info("123")
    //notification.success({ message: "123", description: "123" })
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        //handleSuccessClick()
    };


    return (
        <Menu onClick={onClick} style={{ "display": style.display, "alignItems": style.alignItems }} selectedKeys={[current]} mode="horizontal" items={items} theme={style.theme} />

    )
};

export default HeaderNav;