import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import React from 'react';

export default function LoginForm() {
  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 items-center text-secondary'>
          <div className='flex flex-row items-center gap-3'>
            <h1 className='text-3xl font-semibold text-pink-500'>Login</h1>
          </div>
          <p className='text-neutral-400'>Welcome back to NextMatch</p>
        </div>
      </CardHeader>
      <CardBody>
        <form action=''>
          <div className='space-y-4'>
            <Input label='Email' variant='bordered' />
            <Input label='Password' variant='bordered' type='password' />
            <Button fullWidth color='primary' type='submit'>
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
