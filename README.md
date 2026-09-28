# 🏋️ FitLog — Workout Library


FitLog is a modern workout library web app where you can browse exercises by muscle group, view detailed instructions, save your favorite lifts, and build a daily workout plan.

---

## 🛠️ Technologies Used

- **Next.js (App Router)** — React framework with server components & file-based routing
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Tailwind component library (tabs, buttons, dropdowns)
- **next/font** — Google Fonts (Oswald + Inter) optimized & self-hosted
- **React Context API** — Global state for Today's Plan & Saved workouts
- **React Hot Toast** — Toast notifications for user actions
- **React Icons** — Icon set (clock, fire, star, etc.)
- **REST API** — Fetches workout data from a Cloudflare Workers endpoint
- **LocalStorage** — Persists plan & saved workouts across refresh

---

## ✨ Key Features

### 1. 📚 Workout Library with Rich Cards
Browse a growing library of exercises, each showing muscle groups, equipment, duration, calories, and rating — all in a clean, responsive grid.

### 2. 🔍 Detailed Exercise View
Each workout has its own detail page with step-by-step instructions, difficulty level, sets, reps, and target muscle groups.

### 3. 📝 Today's Plan Builder
Add any workout to "Today's Plan" with one click. Track total exercises, minutes, and calories in real time through a stats dashboard.

### 4. 💾 Save for Later
Bookmark workouts you're not ready to do yet. Saved lifts appear in a dedicated tab and can be added to your plan anytime.

### 5. ⚡ Smooth UX with Sorting, Toasts & Loading States
- Sort workouts by **duration**, **calories**, or **rating**
- Instant **toast notifications** for add/remove/done actions
- **Skeleton loaders** while data fetches
- Mark workouts as **done** with a disabled "Completed" state

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build