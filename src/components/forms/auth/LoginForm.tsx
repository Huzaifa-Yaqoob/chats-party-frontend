'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginSchema } from '@/components/forms/auth/schema';
import { Form, FormField } from '@/components/ui/form';
import { FieldRenderer } from '@/components/ui/bloom/field-renderer';
import { PasswordInput } from '@/components/ui/bloom/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FieldRenderer label="Username">
              <Input placeholder="username" {...field} />
            </FieldRenderer>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default LoginForm;
