import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <div style={{ color: "white", fontWeight: "bold", fontSize: 20, float: "left", marginRight: 30 }}>
            WMS
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home">
              <Link to="/">Strona główna</Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to="/products">Produkty</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "40px 50px", backgroundColor: "#f0f2f5" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>Warehouse Management System ©2025</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
