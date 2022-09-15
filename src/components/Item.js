import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Item({ itemData }) {

  const { title, description, image, price, quantity } = itemData;
  const [itemTotalPrice, setItemTotalPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState(quantity);

  function changeQuantity(value) {
    if (value === 'add') {
      setItemQuantity(itemQuantity + 1);
    } else if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  useEffect(() => {
    setItemTotalPrice(price * itemQuantity);
  }, [itemQuantity]);

  function removeItem() {
    const confirmation = window.confirm(`Deseja excluir o item ${title}`);
    if (confirmation) {
      //colocar para remover no carrinho do back
      console.log('vai ter uma exclusão');
    }
  }

  return (
    <Wrapper>
      <Description>
        <ItemPhoto>{image}</ItemPhoto>
        <ItemText>
          <h3>{title}</h3>
          <p>{description}</p>
        </ItemText>
      </Description>
      <ItemData>
        <DeleteItem onClick={removeItem}>
          <BsTrash />
        </DeleteItem>
        <Quantity>
          <button onClick={() => changeQuantity('add')}> + </button>
          <p>{itemQuantity}</p>
          <button onClick={() => changeQuantity('remove')}> - </button>
        </Quantity>
        <Price>
          <div>
            <p>Valor un.</p>
            <p>D$ {price}</p>
          </div>
          <div>
            <p>Total</p>
            <p>D$ {itemTotalPrice}</p>
          </div>
        </Price>
      </ItemData>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  border-radius: 5px;
  border: 1px solid black;
`;

const Description = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const ItemPhoto = styled.div`
  width: 100px;
  height: 70px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #C6C6C6;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const ItemText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  p{
    margin-top: 10px;
    color: #C6C6C6;
    font-size: 14px;
  }
`;

const ItemData = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
  font-size: 14px;
`;

const DeleteItem = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #333333;
  font-size: 18px;
  border: 1px solid #333333;
  border-radius: 3px;
  cursor: pointer;
`;

const Quantity = styled.div`
  width: 20px;
  height: 100%;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button, p{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #333333;
    border-radius: 3px;
    background-color: white;
  }

  button{
    cursor: pointer;
  }
`;

const Price = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  align-items: flex-end;

  div{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  }
`;