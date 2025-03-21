'use client';

import Image from 'next/image';
import styled from 'styled-components';
import menu from '@/utils/menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useGlobalState } from '@/context/GlobalProvider';

export default function Sidebar() {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className='profile'>
        <div className='profile-overlay'></div>
        <div className='image'>
          <Image width={70} height={70} src='/avatar1.png' alt='' />
        </div>
        <h1>
          <span>John</span>
          <span>Doe</span>
        </h1>
      </div>
      <ul className='nav-items'>
        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.link)}
            className={`nav-item ${pathname === item.link ? 'active' : ''}`}
          >
            {item.icon}
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button>Sign out</button>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  width: ${(props) => props.theme.sidebarWidth};
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.colorGrey3};

  .profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey0};

    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      inset: 0;

      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      opacity: 0.2;
    }

    h1 {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      line-height: 1.4;
    }

    .image,
    h1 {
      position: relative;
      z-index: 1;
    }

    .image {
      flex-shrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;

      width: 70px;
      height: 70px;

      img {
        border-radius: 100%;
        transition: all 0.5s ease;
      }
    }

    > h1 {
      margin-left: 0.8rem;
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      line-height: 100%;
    }
  }

  .nav-item {
    position: relative;
    padding: 0.6rem 1rem;
    padding-left: 2.1rem;
    margin: 0.3rem 0;

    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;

    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: '';
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.colorGreenDark};
      z-index: 1;
      transition: all 0.3s ease-in-out;

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      z-index: 2;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorIcons};
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.activeNavLink};

    i,
    a {
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }

  > button {
    margin: 1.5rem;
  }
`;
