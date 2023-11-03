import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "./icons/SearchIcon";
import DropdownMenu from "./DropdownMenu";

const StyledHeader = styled.header`
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
  img{
    border-radius: 15px;
    max-height: 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: flex;
    flex-direction: column;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #000;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    align-self: center;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  min-width: 30px;;
  padding: 10px 0;
  svg{
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a{
    display: inline-block;
    min-width: 20px;
    color: white;
    svg{
      width: 14px;
      height: 14px;
    }
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}><img src="/images/Logo.png" /></Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            {/* <DropdownMenu
              title="Home"
              url="/home"
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            /> */}
            {/* <DropdownMenu
              title="Products"
              url="/"
              submenu={[
                { title: 'All Products', url: '/products' },
                { title: 'Categories', url: '/categories' },
                { title: 'Account', url: '/account' },
              ]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            /> */}
            {/* <DropdownMenu
              title="Services"
              url="/services"
              submenu={[
                {
                  title: 'Endoscope Repairs & Service',
                  url: '/'
                },
                {
                  title: 'Ultrasound Probe Repairs',
                  url: '/'
                },
                {
                  title: 'Extended Warranty',
                  url: '/'
                },
                {
                  title: 'Loaner Program',
                  url: '/'
                },
                {
                  title: 'Repair As You Go (RAG)',
                  url: '/'
                },
                {
                  title: 'Training Program',
                  url: '/'
                },
              ]}

              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            /> */}

            <DropdownMenu
              title="Products"
              url="/"
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />

            <DropdownMenu
              title="All Products"
              url="/products"
              cartProducts={cartProducts}
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />

            <DropdownMenu
              title="Categories"
              url="/categories"
              cartProducts={cartProducts}
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />

            <DropdownMenu
              title="Account"
              url="/account"
              cartProducts={cartProducts}
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />

            <DropdownMenu
              title="Cart"
              url="/cart"
              cartProducts={cartProducts}
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />


            {/* <DropdownMenu
              title="About Us"
              url="/about"
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <DropdownMenu
              title="Contact Us"
              url="/contact"
              submenu={[]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            /> */}
          </StyledNav>
          <SideIcons>
            <Link href={'/search'}><SearchIcon /></Link>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}