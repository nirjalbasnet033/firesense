import React from 'react';
import Header from '@/components/Header';
import SignUpForm from './components/SignUpForm';

export const metadata = {
  title: 'Create Account — Civilian Sensi',
  description: 'Join 52,000+ Free Fire players. Create your Civilian Sensi account and get instant access to pro sensitivity configs.',
};

export default function SignUpPage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <SignUpForm />
    </main>
  );
}