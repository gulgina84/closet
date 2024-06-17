This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Goal
This app will help me to track and organize my closet and also provides AI-based outfit suggestions. So I know what I have in my closet(potentially help me to shop less), and spend less time searching for the perfect outfit.

## Rquirements
- Track my closet (add item(photo), remove item, update item), this is MVP
- Organize my closet (by category, color, style, occasion, potentially scan image to auto categorize)
- Provide AI-based outfit suggestions (based on occasion, weather, personal style etc)

## Tech Stack
- Next.js
- Tailwind CSS
- Prisma
- Vercel


## TODO:
- Authentication (Auth0 or Firebase)
- image storage (Cloudinary)
- AI/Machine Learning: TensorFlow.js or PyTorch for outfit suggestion algorithms. You might also consider using pre-trained models or APIs.
- Google Cloud Vision API or Clarifai offer powerful image recognition capabilities that can be integrated into your app to categorize clothing items.
- Spike on TensorFlow.js to see if it can be used to create a recommendation engine for outfit suggestions.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



Run `npx prisma seed` to seed the database with some initial data.


Run `npx prisma studio` to see the database schema and data (http://localhost:5555).


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
