# Hello and Welcome

Hello candidate, welcome to your Onova take home programming assignment. 

Your goal for this assignment is to access and display specific information out of the included SQLite database named database.db. During the interview, you will be expected to present and modify your code while answering our questions. You can, and are expected to install whatever drivers you need.

> Note that SQLite has some quirks, like booleans being represented by 1 for True and 0 for False. To get familiar with these quirks visit [sqlite's documentation](https://www.sqlite.org/quirks.html).

There are several ways you can accomplish this goal. You may:
- Access the database with SQL queries in the NextJS backend. 
- Access the database with Prisma ORM in the NextJS backend.
- Access the database with SQL queries in a Django/Flask/FastAPI backend of your own creation.
- Access the database with Django ORM in a Django backend of your own creation.

Afterwards, you will edit the index page to display the acquired information in any way you feel appropriate.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## The Database Schema

Format of schema:

Table: ExampleTable

| example_column1 (primary key) | example_column2 |
| - | - |
| type1 | type2 ( possible_value1 \| possible_value2 )


> Note: Your markdown renderer might display the table without vertical bars, 
> you can copy the readme.md into [markdownlivepreview.com](https://markdownlivepreview.com/)


Table: Users

| id (primary key) | username | role |
| - | - | - |
| int | string | string ('admin' \| 'mod' \| 'user') 

Table: Names 

| id (primary key) | first_name | last_name | age |
| - | - | - | - |
| int | string | string | int |

Table: Permissions

| role (primary key) | add_users | delete_messages | delete_users |
| - | - | - | - |
| string ('admin' \| 'mod' \| 'user') | boolean | boolean | boolean |

## Goals 

1. Report the usernames of all users aged 25 and above
2. Report only the first name of the user with the username "ZL" 
3. Report the permissions of the user with the first name "Edward"

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

test modification
