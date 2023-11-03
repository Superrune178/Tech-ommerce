import styled from "styled-components";
import Link from "next/link";
import ArrowDown from "./icons/ArrowDown";
import { useRouter } from 'next/router';

const DropdownContent = styled.div`
  display: ${props => props.visible ? "block" : "none"};
  position: absolute;
  border-radius: 10px;
  background-color: #222;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DropdownItem = styled(Link)`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #0D3D29;
    border-radius: 5px;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

const DropdownLink = styled.a`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  color: ${props => props.active ? '#fff' : '#aaa'};
  text-decoration:none;
  min-width: 30px;
  padding: 10px 0;
  svg{
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;

export default function DropdownMenu({ title, url, submenu, cartProducts, openDropdown, setOpenDropdown }) {
  const router = useRouter();

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

  const handleDropdownClick = (e) => {
    if (isSmallScreen && submenu.length > 0) {
      e.preventDefault();
      if (openDropdown === title) {
        setOpenDropdown(null);  // close the currently open dropdown
      } else {
        setOpenDropdown(title);  // open the clicked dropdown and close others
      }
    }
  };

  // If cartProducts is passed and it's for the 'Cart' menu, append the length
  const displayTitle = title === 'Cart' && cartProducts ? `${title} (${cartProducts.length})` : title;

  return (
    <DropdownWrapper>
      <DropdownLink
        href={url}
        active={router.pathname === url ? 'true' : 'false'}
        onClick={handleDropdownClick}
      >
        {displayTitle}
        {submenu.length > 0 && <ArrowDown />}
      </DropdownLink>
      <DropdownContent visible={openDropdown === title}>
        {isSmallScreen && submenu.length > 0 && (
          <DropdownItem href={url} active={router.pathname === url ? 'true' : 'false'}>
            {title}
          </DropdownItem>
        )}
        {submenu.map((item, index) => (
          <DropdownItem href={item.url} key={index} active={router.pathname === item.url ? 'true' : 'false'}>
            {item.title}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
}
