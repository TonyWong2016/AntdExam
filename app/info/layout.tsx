'use client'
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Breadcrumb, Layout } from 'antd';
import HeaderNav from '@/app/ui/headernav';
import SideNav from '@/app/ui/sidenav';

const { Content } = Layout;
const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <body>
            <Layout>
                <HeaderNav
                    display={''}
                    alignItems={'right'}
                    theme='dark'
                />

                <Layout>
                    <SideNav />


                    <Layout style={{ padding: '0 24px 24px' }}>



                    </Layout>
                </Layout>
            </Layout>

            <AntdRegistry>{children}</AntdRegistry>
        </body>
    </html>
);

export default RootLayout;
// const App: React.FC = ({ children }: { children: React.ReactNode }) => {


//     return (
// <Layout>

//     <HeaderNav
//         display={''}
//         alignItems={'right'}
//         theme='dark'
//     />
//     <SideNav />
//     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
// </Layout>
//     );
// };

// export default App;