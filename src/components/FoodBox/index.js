import { Card, Col, Button } from 'antd';

export function FoodBox({ food }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>{food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}
