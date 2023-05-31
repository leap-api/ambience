# Ambience - AI Generated Wallpapers & Quotes Chrome Extension

![Ambience Banner](https://api.ambience.page/banner-image.jpg)

Ambience is a Chrome extension that takes over your new tab and displays a stunning AI-generated wallpaper that changes every hour. Experience a fresh, captivating visual treat with each new tab, as Ambience utilizes the Leap API to generate breathtaking wallpapers.

This repository houses the open-source code for developers to fork and draw inspiration for building their chrome extensions or similar applications using the Leap API for image generation. It contains two apps:

1. The Chrome extension app (client-side only, built with React and Webpack), which compiles into a zip containing the Chrome extension files.
2. A Next.js API that manages image generation and stores the image URLs in a Supabase Database.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![ESLint](https://img.shields.io/badge/code_style-ESLint-5ed9c7.svg)
[![React](https://img.shields.io/badge/built_with-React-61dafb)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/built_with-Next.js-0070f3)](https://nextjs.org/)

## Try It Live

Witness the charm of Ambience by installing it directly from the Chrome Store:
[Ambience AI Chrome Store](https://chrome.google.com/webstore/detail/ambience-ai/ndgjbbjefciomenkpggaepmhbkhmapap)

## Read The Guide

Read the companion guide to this repo that explains how everything works step by step: [Guide](https://www.tryleap.ai/docs/build-ambience-ai-generated-wallpaper-chrome-extension)

## Leap API: The creative force behind Ambience

Ambience harnesses the powerful Leap API to generate mesmerizing images on the fly. This suite of AI APIs brings life to every new tab, presenting you with vibrant, ever-changing wallpapers on the go.

## Learn, Modify, and Innovate with AI

Explore the capabilities of the AI-powered image generation and learn from the code to modify and adapt it to your needs, or develop an entirely new application built on cutting-edge technology.

## Getting Started

To create your own captivating wallpapers, follow these simple steps:

1. Clone the repository:

```
git clone https://github.com/leap-api/ambience.git
```

2. Run the Chrome extension:

   Enter the `chrome-extension` directory:

   ```
   cd chrome-extension
   ```

   Install dependencies:

   ```
   yarn
   ```

   Start the app:

   ```
   yarn start
   ```

   Build the app (combine it into a zip):

   ```
   yarn build
   ```

3. Run the API:

   Enter the `apis` directory:

   ```
   cd apis
   ```

   Install dependencies:

   ```
   yarn
   ```

   Create a `.env` file in the `apis` directory and include these environment variables:

   ```
   SUPABASE_KEY=your_supabase_key
   SUPABASE_URL=your_supabase_url
   INSERT_IMAGE_WEBHOOK_URL=your_insert_image_webhook_url
   LEAP_API_KEY=your_leap_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

   Start the development server:

   ```
   yarn dev
   ```

To generate images every hour, the project uses Vercel Cron jobs to ping the `generate-image` endpoint in the APIs app.

## Supabase Database and OpenAI for Quotes

Ambience uses Supabase for storing both images and quotes in a database. Every hour, a new image is generated by the Leap API, and a new inspirational quote is generated using OpenAI.

When an image generation succeeds, the Leap API calls the provided INSERT_IMAGE_WEBHOOK_URL with a payload that includes the generated images. The Next.js API then catches the payload and inserts the images into the Supabase database.

## Contributing

We encourage collaboration and appreciate your contributions to Ambience. If you have suggestions for improvement or major modifications, please open an issue to discuss.

## Resources and Support

- Discord Community: [Leap Discord](https://discord.gg/NCAKTUayPK)
- Help Email: help@tryleap.ai

## License

Ambience is released under the [MIT License](https://choosealicense.com/licenses/mit/).
