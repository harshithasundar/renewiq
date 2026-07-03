# 🟢 RenewIQ

A modern full-stack subscription management platform that helps users organize subscriptions, monitor renewals, and analyze recurring expenses.

---

## ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📂 Automatic Default Categories
- ➕ Add, Edit & Delete Subscriptions
- 📅 Renewal Tracking
- 📊 Analytics Dashboard
- 📈 Monthly Spending Overview
- 🔍 Search Subscriptions
- 👥 Multi-user Support

---

## 🛠 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query

### Backend
- Node.js
- Express.js
- Prisma ORM
- JWT Authentication
- bcrypt

### Database
- PostgreSQL

## 📁 Project Structure

```text
RenewIQ
│
├── 📁 client                     # Next.js Frontend
│   │
│   ├── 📁 app
│   │   ├── analytics
│   │   ├── login
│   │   ├── register
│   │   ├── renewals
│   │   ├── settings
│   │   ├── subscriptions
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── 📁 components
│   │   ├── auth
│   │   ├── dashboard
│   │   ├── layout
│   │   ├── subscription
│   │   └── ui
│   │
│   ├── 📁 hooks
│   │   ├── useCategories.ts
│   │   ├── useDashboard.ts
│   │   └── useSubscriptions.ts
│   │
│   ├── 📁 providers
│   │   └── QueryProvider.tsx
│   │
│   ├── 📁 services
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   ├── category.service.ts
│   │   ├── dashboard.service.ts
│   │   └── subscription.service.ts
│   │
│   ├── 📁 lib
│   │   └── utils.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── 📁 server                     # Express Backend
│   │
│   ├── 📁 prisma
│   │   ├── migrations
│   │   ├── schema.prisma
│   │   └── seed.ts (optional)
│   │
│   ├── 📁 src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── validators
│   │   ├── types
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── 📄 README.md
├── 📄 .gitignore

```

## 📸 Screenshots

### 📝 Register
![Register](assets/register.png)

---

### 🔐 Login
![Login](assets/login.png)

---

### 📊 Dashboard (Before Adding Subscriptions)
![Dashboard Before](assets/dashboard-before.png)

---

### 📂 Subscriptions
![Subscriptions](assets/subscriptions.png)

---

### ➕ Add Subscription
![Add Subscription](assets/add-subscription.png)

---

### ✏️ Edit Subscription
![Edit Subscription](assets/edit-subscription.png)

---

### 📊 Dashboard (After Adding Subscriptions)
![Dashboard After](assets/dashboard-after.png)

---

### 🔔 Renewals
![Renewals](assets/renewals.png)

---

### 📈 Analytics
![Analytics](assets/analytics.png)

---

### ⚙️ Settings
![Settings](assets/settings.png)



## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/harshithasundar/renewiq.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---
## 🏗 Architecture

```text
                    ┌─────────────────────┐
                    │     Next.js App     │
                    │  React + TypeScript │
                    └──────────┬──────────┘
                               │
                     Axios + JWT Token
                               │
                    ┌──────────▼──────────┐
                    │    Express Server   │
                    │ REST API + JWT Auth │
                    └──────────┬──────────┘
                               │
                           Prisma ORM
                               │
                    ┌──────────▼──────────┐
                    │    PostgreSQL DB    │
                    └─────────────────────┘
```

## 🚀 RenewIQ Workflow

```mermaid
flowchart TD
    A[👤 New User] --> B[Create Account]
    B --> C[Automatic Category Initialization]
    C --> D[Login]
    D --> E[Dashboard]

    E --> F[Manage Subscriptions]
    F --> G[Add]
    F --> H[Edit]
    F --> I[Delete]

    E --> J[Renewals]
    E --> K[Analytics]
    E --> L[Settings]
```

## 🔮 Future Improvements

- AI-powered subscription insights
- Email renewal reminders
- Budget tracking
- Calendar integration
- Dark mode
- Cloud deployment

---

## 👩‍💻 Author

Harshitha Sundar


## 🌟 Acknowledgements

This project was designed and developed to strengthen full-stack development skills using modern technologies including Next.js, Express, Prisma, PostgreSQL, and JWT authentication.

Every feature was built with the goal of creating a practical, scalable, and user-friendly application.

Contributions, suggestions, and feedback are always welcome.

Feel free to fork the repository, create an issue, or submit a pull request.
