import styled from "styled-components";
import { MdLogout, MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/drivenzon.js";
import UserContext from "../contexts/UserContext.js";
import { useContext } from "react";


export default function Header() {

  const userData = useContext(UserContext);
  const navigate = useNavigate();

  function userLogout() {
    if (userData) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`
        }
      };

      logout(config)
        .then(res => {
          alert('Usuário deslogado');
          navigate('/');
        })
        .catch(res => {
          console.log(res.data);
          alert('Error');
        });
    }
  }

  return (
    <Wrapper>
      <Logo onClick={() => navigate('/')}>
        drivenzon
      </Logo>
      <UserMenu>
        <CartStyle onClick={() => navigate('/cart')}>
          <div>
            <MdShoppingCart />
          </div>
          <CartNumber>
            {userData.cart ? userData.cart.length : 0}
          </CartNumber>
        </CartStyle>
        <div>
          <MdLogout onClick={userLogout} />
        </div>
      </UserMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 4px rgba (0,0,0,0.3);
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: deeppink;
  cursor: pointer;
`;

const UserMenu = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  color: deeppink;

  div{
    cursor: pointer;
  }
`;

const CartStyle = styled.div`
  font-size: 40px;
  width: 40px;
  height: 45px;
  position: relative;

`;

const CartNumber = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #333333;
  font-size: 10px;
  left: calc((40px - 20px)/2);
  top: calc((45px - 20px)/4);
`;