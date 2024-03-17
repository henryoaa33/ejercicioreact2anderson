import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!a || !b || !c) {
      setError('Por favor, complete todos los campos');
      return;
    }

    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
      setError('La ecuación no tiene soluciones reales');
      return;
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    setResult({ x1, x2 });
    setError(null);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Calculadora de Fórmula Cuadrática</h1>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formA">
          <Form.Label>Ingrese el valor de a:</Form.Label>
          <Form.Control
            type="number"
            placeholder="a"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Form.Group controlId="formB">
          <Form.Label>Ingrese el valor de b:</Form.Label>
          <Form.Control
            type="number"
            placeholder="b"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Form.Group controlId="formC">
          <Form.Label>Ingrese el valor de c:</Form.Label>
          <Form.Control
            type="number"
            placeholder="c"
            value={c}
            onChange={(e) => setC(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Calcular
        </Button>
      </Form>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {result && (
        <Alert variant="success" className="mt-3">
          Las soluciones son: x1 = {result.x1.toFixed(2)} y x2 = {result.x2.toFixed(2)}
        </Alert>
      )}
    </div>
  );
}

export default App;

