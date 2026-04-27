import React from 'react';
import Header from '@/components/Header';
import LoginForm from './components/LoginForm';

export const metadata = {
  title: 'Login — Civilian Sensi',
  description: 'Log in to your Civilian Sensi account and access your sensitivity configs.',
};

export default function LoginPage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <LoginForm />
    </main>
  );
}