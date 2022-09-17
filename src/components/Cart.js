import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getCart } from "../services/drivenzon.js";
import UserContext from "../contexts/UserContext.js";
import Item from "./Item.js";


export default function Cart() {

  const userData = useContext(UserContext);
  const [userCart, setUserCart] = useState([]);

  /*   useEffect(() => {
      if (userData) {
        const config = {
          headers: {
            Authorization: `Bearer: ${userData.token}`
          }
        };
  
        getCart(config)
          .then(res => {
            setUserCart(res.data.userCart);
          })
          .catch(res => {
            console.log(res.data);
            alert('Error');
          });
      }
    }, []); */

  const testeCarrinho = [{
    title: "Titulo do item 00",
    description: "Descrição do item 00",
    image: "Foto do item00",
    price: 2000,
    quantity: 2,
    inventory: 5
  },
  {
    title: "Titulo do item 01",
    description: "Descrição do item 01",
    image: "Foto do item01",
    price: 855,
    quantity: 2,
    inventory: 5
  },
  {
    title: "Titulo do item 02",
    description: "Descrição do item 02",
    image: "Foto do item02",
    price: 1000,
    quantity: 3,
    inventory: 5
  },
  {
    title: "Titulo do item 03",
    description: "Descrição do item 03",
    image: "Foto do item03",
    price: 100000,
    quantity: 1,
    inventory: 5
  }];

  return (
    <Wrapper>
      <Items>
        {testeCarrinho.map((item, index) => <Item key={index} itemData={item} />)}
      </Items>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: #333333;
  font-size: 16px;
  gap: 15px;
`;

