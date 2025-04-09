"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Splitwise Clone</h1>
            </div>
            <div className="flex items-center">
              {session ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <UserCircleIcon className="h-8 w-8 text-gray-400" />
                    )}
                    <span className="text-gray-700">{session.user?.name}</span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="space-x-4">
                  <Link
                    href="/auth/signin"
                    className="text-purple-600 font-medium hover:text-purple-800 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signin"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {session ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-6 sm:px-0"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Create New Group Card */}
              <Link
                href="/groups/new"
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition"
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-purple-400"
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

              {/* View Groups Card */}
              <Link
                href="/groups"
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition"
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">View your groups</h3>
                    <p className="mt-1 text-sm text-gray-500">Manage expenses and settlements</p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4 py-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Split expenses with friends and family
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Keep track of shared expenses and balances with housemates, trips, groups, friends, and family.
            </p>
            <Link
              href="/auth/signin"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </main>
    </div>
  );
}
