import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import NavLink from './nav-bar-item';

export default function NavBar() {
  return (
    <Navbar
      position='static'
      maxWidth='xl'
      className='bg-green-300'
      classNames={{
        item: [
          'text-white',
          'text-xl',
          'uppercase',
          'data-[active=true]:text-pink-500',
        ],
      }}
    >
      <NavbarBrand>
        <div className='font-bold text-3xl flex gap-1'>
          <span className='text-white'>Next</span>
          <span className='text-pink-500'>MATCH</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink href='/members' label='Members' />
        <NavLink href='/lists' label='Lists' />
        <NavLink href='/messages' label='Messages' />
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button
          as={Link}
          href='/register'
          variant='bordered'
          color='primary'
          className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg border-none'
        >
          Register
        </Button>
        <Button
          as={Link}
          href='/login'
          variant='bordered'
          className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg border-none'
        >
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
