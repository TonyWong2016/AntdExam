import React from 'react';
import '@/app/ui/global.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';


const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;