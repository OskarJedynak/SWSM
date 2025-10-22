import { Card } from 'antd';

export default function HomePage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Card
        title="Strona główna WMS"
        style={{ borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        <p>Joł w systemie zarządzania magazynem (Warehouse Management System).</p>
        <p>Wybierz zakładkę Produkty, aby zobaczyć listę produktów.</p>
      </Card>
    </div>
  );
}
