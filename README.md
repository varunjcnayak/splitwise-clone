# Splitwise Clone

A full-stack expense sharing application built with Next.js, Supabase, and Twilio.

## Features

- Google Authentication
- Create and manage expense groups
- Add and split bills among group members
- Track balances and settlements
- Weekly WhatsApp notifications

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Authentication**: NextAuth.js with Google Provider
- **Database**: Supabase (PostgreSQL) with Prisma ORM
- **Styling**: Tailwind CSS
- **Notifications**: Twilio WhatsApp API
- **Hosting**: Vercel

## Prerequisites

- Node.js 18+ and npm
- Supabase account
- Google OAuth credentials
- Twilio account with WhatsApp API access

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://your-database-url"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

# Twilio
TWILIO_ACCOUNT_SID="your-twilio-account-sid"
TWILIO_AUTH_TOKEN="your-twilio-auth-token"
TWILIO_WHATSAPP_FROM="your-twilio-whatsapp-number"
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd splitwise-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main models:
- User (NextAuth.js)
- Group
- GroupMember
- Expense
- Split
- Settlement

## Deployment

The application is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 