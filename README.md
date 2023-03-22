## Supabase 
when cant access supabase from supabase API
https://stackoverflow.com/questions/67551593/supabase-client-permission-denied-for-schema-public
Run this SQL script in Supabase SQL editor.
https://supabase.com/docs/guides/integrations/prisma#troubleshooting

If your database schema is out of sync from your migration history, prisma migrate dev will detect a migration history conflict or a schema drift. When prisma migrate dev detects the drift, it might ask to to reset your database schema. If you choose yes, it will delete the public schema along with the default grants defined in your database.

If you run into this problem, create a draft migration using prisma migrate dev --create-only, and add the following helper SQL:

     grant usage on schema public to postgres, anon, authenticated, service_role;

     grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role;
     grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role;
     grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role;

     alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;
     alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
     alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;

Run prisma migrate dev to apply the draft migration to the database.

## Prisma
https://www.prisma.io/docs/reference/api-reference/command-reference

Create the database schema
Run the following command to create a migration file with the SQL necessary to create the database schema:

npx prisma migrate dev --name init

You should see the following output:

Your database is now in sync with your schema.

To actually create the tables in your database, you now can use the following command of the Prisma CLI:
Create the tables in your database based on your Prisma schema.

npx prisma db push

Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:
Regenerate your Prisma Schema.

npx prisma generate

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql,
   sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

Usage

$ prisma [command]

Commands

            init   Set up Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

Set up a new Prisma project
$ prisma init

Generate artifacts (e.g. Prisma Client)
$ prisma generate

Browse your data
$ prisma studio

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ prisma migrate dev

Pull the schema from an existing database, updating the Prisma schema
$ prisma db pull

Push the Prisma schema state to the database
$ prisma db push

Validate your Prisma schema
$ prisma validate

Format your Prisma schema
$ prisma format

## Database Design

![Image External](https://raw.githubusercontent.com/wahid-ari/next-supabase-music/master/public/database.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
