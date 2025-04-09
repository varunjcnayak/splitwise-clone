'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      {/* Top nav */}
      <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-purple-700 tracking-wide">SplitBuddy</h1>
        <div className="space-x-4">
          <Link
            href="/auth/signin"
            className="text-purple-600 font-medium hover:text-purple-800 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Expense Sheet
          </h2>

          <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 border-b pb-2 mb-4">
            <div>Friend</div>
            <div>Amount</div>
            <div>Status</div>
          </div>

          {/* Dummy data rows */}
          {['Alice', 'Bob', 'Charlie'].map((name, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="grid grid-cols-3 gap-4 text-gray-700 py-2 border-b"
            >
              <div>{name}</div>
              <div>₹{(Math.random() * 1000).toFixed(2)}</div>
              <div className={idx % 2 === 0 ? 'text-green-500' : 'text-red-500'}>
                {idx % 2 === 0 ? 'Settled' : 'Pending'}
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-6">
            <Link
              href="/groups/new"
              className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              + Create New Group
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
