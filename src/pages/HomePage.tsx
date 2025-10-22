import { Card, Form, Input, Button } from 'antd';

export default function HomePage() {
  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      {/* Karta powitalna */}
      <Card
        title="Witamy w systemie WMS"
        style={{ borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: 40 }}
      >
        <p>Witaj w systemie zarządzania magazynem (Warehouse Management System).</p>
        <p>Po zalogowaniu wybierz zakładkę Produkty, aby zobaczyć listę produktów.</p>
      </Card>

      {/* Karta logowania */}
      <Card
        title="Logowanie"
        style={{ borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        <Form layout="vertical">
          <Form.Item label="Użytkownik">
            <Input placeholder="Wpisz nazwę użytkownika" />
          </Form.Item>
          <Form.Item label="Hasłó">
            <Input.Password placeholder="Wpisz hasło" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block disabled>
              Zaloguj
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
