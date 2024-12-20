import React from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Wine className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          W&S Labelling
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
          <div className="mt-6 text-center">
            <Link to="/register" className="text-sm text-indigo-600 hover:text-indigo-500">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}