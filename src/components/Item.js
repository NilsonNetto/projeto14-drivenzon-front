import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { deleteFromCart } from "../services/drivenzon.js";

export default function Item({ itemData }) {

  const userData = useContext(UserContext);
  const { _id, title, description, image, price, quantity, inventory } = itemData;
  const [itemTotalPrice, setItemTotalPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState(quantity);

  function changeQuantity(value) {
    if (value === 'add' && itemQuantity < inventory) {
      setItemQuantity(itemQuantity + 1);
    } else if (value === 'remove' && itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  useEffect(() => {
    setItemTotalPrice(((price * itemQuantity) / 100).toFixed(2));
  }, [itemQuantity]);

  function findQuantity() {
    const product = userData.cart.find(product => product.productId === _id);
    setItemQuantity(product.quantity);
  }

  function removeItem() {
    const confirmation = window.confirm(`Deseja excluir o item ${title}`);
    if (confirmation) {
      /* if (userData) {
        const config = {
          headers: {
            Authorization: `Bearer: ${userData.token}`
          }
        };

        const body = {
          deleteId: _id
        };

        deleteFromCart(body, config)
          .then(res => {
            alert('Produto deletado');
          })
          .catch(res => {
            console.log(res.data);
            alert('Error');
          });
      } */

      console.log('vai ter uma exclusão');
    }
  }

  return (
    <Wrapper>
      <Description>
        <ItemPhoto>
          <img src={image} alt={title} />
        </ItemPhoto>
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
            <p>D$ {(price / 100).toFixed(2)}</p>
          </div>
          <BoldPrice>
            <p>Total</p>
            <p>D$ {itemTotalPrice}</p>
          </BoldPrice>
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
  border: 1px solid #C6C6C6;
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
  border-radius: 10px;
  border: 1px solid #C6C6C6;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
    height: 100%;
    border-radius: 10px ;
    object-fit: cover;
  }
`;

const ItemText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3{
    font-weight: 700;
  }

  p{
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const ItemData = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const BoldPrice = styled.div`
  font-weight: 700;
`;