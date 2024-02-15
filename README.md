This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

To install node_modules -

```
npm i
```

To run app -

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Features -

All the features are built in house (without using third party library) to keep the app light.
Even the DND feature is built-in house.
App has been made responsive.

Live Link:

Tech Stack:

- React.js
- Next.js
- Tailwind CSS

1. Video Player Component:

Implemented a video player with essential functionalities:

- Play/Pause toggle.
- Seek functionality.
- Timer displaying current playback time and duration.
- Autoplay.
- Speed selector for playback speed adjustment.

2. Playlist Component:

- Developed a playlist component to display and manage videos.
- Allowed users to reorder videos in the playlist.
- Clicking on a video in the playlist loads and play that video in the video player.

3. Bonus: covered bonus features as well

- Fullscreen mode
- volume control
- Thumbnail previews
- Search/filter functionality for the playlist.
- Made the application responsive for various screen sizes.
- Added keyboard shortcuts:-
  Space: Play/Pause
  Arrow Right: Seek Forward
  Arrow Left: Seek Backward
  Arrow Up: Increase Volume
  Arrow Down: Decrease Volume
- Videos continue playing from where users left-off.

4. React State Management:

- Used context to manage state. I could have used Redux / Zustand but they were not needed that much.

5. Styling:

- Utilized Tailwind CSS.

Video -
