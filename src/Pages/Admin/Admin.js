import React from 'react';
import { HomeOutlined,  ProductFilled} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from '../../assests/logo.png';
import ProductManagement from './ProductManagement';
import { useAuth } from '../../contexts/AuthContext';

const { Header, Content, Sider } = Layout;

const items1 = [
    {
        key: "home",
        label: "Acceuil",
        icon: HomeOutlined,
        path: "/"
    }
].map((menu) => ({
  key: menu.key,
  label: menu.label,
}));
const items2 = [{
    key: "product",
    label: "Produits",
    icon: ProductFilled,
    path: "admin/products"
}].map((menu) => {
  return {
    key: menu.key ,
    icon: React.createElement(menu.icon),
    label: menu.label
  };
});
export const Admin = () => {

  const { logout } = useAuth();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        
        <div className="demo-logo" >
            <img width={42} src={logo} />
         </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        
         <button className=' btn btn-outline-danger  ' onClick={logout}>Se déconnecter</button>
        
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {<Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>} 
          </Breadcrumb>*/}
          <Content
            style={{
              padding: 10,
              margin: 0,
              marginTop: 20,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>
                <ProductManagement />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};