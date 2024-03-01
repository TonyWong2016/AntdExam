'use client'
import React from 'react';
import { BookOutlined, UserOutlined, VerifiedOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Content, Sider } = Layout;

const firstMenus = [{
    icon: UserOutlined,
    label: '我的账户',
}, {
    icon: VerifiedOutlined,
    label: '我的证书',
}, {
    icon: BookOutlined,
    label: '我的考试',
}]

const items: MenuProps['items'] = firstMenus.map(
    ({ icon, label }, index) => {
        const key = String(index + 1);

        return {
            key: key,
            icon: React.createElement(icon),
            label: label,

            // children: new Array(4).fill(null).map((_, j) => {
            //     const subKey = index * 4 + j + 1;
            //     return {
            //         key: subKey,
            //         label: `option${subKey}`,
            //     };
            // }),
        };
    },
);

const SideNav: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items}
            />
        </Sider>
    )

}

export default SideNav