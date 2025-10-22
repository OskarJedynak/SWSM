import { Table, Card } from 'antd';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  stock: number;
}

export default function ProductsPage() {
  const [products] = useState<Product[]>([
    { id: 1, name: "Produkt A", stock: 67 },
    { id: 2, name: "Produkt B", stock: 67 },
    { id: 3, name: "Produkt C", stock: 67 },
    { id: 4, name: "Produkt D", stock: 67 },
    { id: 5, name: "Produkt E", stock: 67 },
  ]);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Card
        title="Lista produktów"
        style={{ borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        <Table<Product>
          dataSource={products}
          columns={[
            { title: "ID", dataIndex: "id", key: "id" },
            { title: "Nazwa", dataIndex: "name", key: "name" },
            { title: "Stan magazynowy", dataIndex: "stock", key: "stock" },
          ]}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          bordered
        />
      </Card>
    </div>
  );
}
