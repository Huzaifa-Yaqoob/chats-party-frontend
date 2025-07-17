'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Large } from '@/components/ui/bloom/typography';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/forms/auth/LoginForm';
import Register from '@/components/forms/auth/Register';

function AuthForm() {
  const [form, setForm] = useState('r');

  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <Button>
          <Large>Sign Up</Large>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{form === 'r' ? 'Register' : 'Log In'}</DialogTitle>
        </DialogHeader>
        {form === 'r' ? <Register /> : <LoginForm />}
        <DialogFooter>
          {form === 'r' ? (
            <>
              Already have an account
              <Button
                variant={'link'}
                className={'m-0 h-fit p-0 text-base'}
                onClick={() => {
                  setForm('l');
                }}
              >
                Log in
              </Button>
            </>
          ) : (
            <>
              Don't have an account{' '}
              <Button
                variant={'link'}
                className={'m-0 h-fit p-0 text-base'}
                onClick={() => {
                  setForm('r');
                }}
              >
                Register
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AuthForm;
