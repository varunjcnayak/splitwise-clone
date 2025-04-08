'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Splitwise Clone</h1>
          <p className="text-gray-600 mb-8">Please sign in to continue</p>
          <Link
            href="/auth/signin"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Splitwise Clone</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {session?.user?.name && (
                <span className="text-gray-700">Welcome, {session.user.name}</span>
              )}
              <button
                onClick={() => signOut()}
                className="text-gray-700 hover:text-gray-900"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Create New Group Card */}
            <Link
              href="/groups/new"
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50"
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Create new group</h3>
                  <p className="mt-1 text-sm text-gray-500">Start splitting expenses with friends</p>
                </div>
              </div>
            </Link>

            {/* Groups will be listed here */}
          </div>
        </div>
      </main>
    </div>
  );
} 