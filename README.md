# Import Export Hub

A modern web platform where users can browse global products, manage exports, and import items into their personal **My Imports** section with one click.

## 🚀 Live Site URL

**Client:** (https://import-and-export.netlify.app/)
**Server (Vercel):** (https://smart-deals-app.vercel.app/)

---

## ⭐ Key Features

* 🔐 **Secure Authentication** — Email/Password + Google Login
* 📦 **Import & Export Management** — Add, update, import, and delete products in real time
* 🛒 **My Imports & My Exports** — Fully dynamic, user-specific dashboards
* 🖼️ **Modern UI/UX** — Responsive design, consistent components, and clean layouts
* ⚡ **Real-Time Sync** — Product quantity updates instantly using database operations

---





### 1. Layout

* Header with logo, navigation (All Products, My Exports, My Imports, Add Export)
* Login/Register → replaced with user photo + Logout after authentication
* Footer with social links, copyright, contact

### 2. Home Page

* Banner/Slider
* Latest 6 products (sorted by `createdAt: -1`)
* Extra two custom sections

### 3. Authentication

* Login + Register pages
* Google authentication
* Password validation (uppercase, lowercase, min 6 chars)
* Redirect to intended route on success

### 4. Product Details (Private Route)

* Full details
* "Import Now" modal + quantity validation
* Cannot import more than available quantity
* Updates DB quantity using `$inc`

### 5. All Products

* 3-column responsive grid
* Each product includes image, name, rating, country, price, quantity
* “See Details” → Product Details page

### 6. My Imports (Private Route)

* Shows user-imported products
* Remove + See Details
* Stored in database

### 7. Add Export/Product (Private Route)

* Add product form
* Saves to DB
* Instantly appears on All Products

### 8. My Exports (Private Route)

* Shows products added by logged-in user
* Delete + Update (with modal)

---

## 🎨 UI/UX Design Standards

* Consistent typography and spacing
* Grid layouts, equal card sizes
* Modern buttons and components
* Replaced old Twitter icon with new X logo
* Fully responsive across all devices

---

## 🧪 Challenges Implemented

* 🔍 Search on All Products
* 🌙 Dark/Light mode toggle
* 🏷️ Dynamic Title setup per route

---

## 📝 Optional Features Added (If Implemented)

* CSV download from My Exports
* Role-based access: Importer / Exporter

---

## 🛠️ Technologies Used

### Client

* React.js
* React Router
* Firebase Auth
* Tailwind CSS
* SweetAlert / Toast

### Server

* Node.js
* Express.js
* MongoDB
* Vercel Serverless Functions

---

## 📦 How to Run Locally

### Client

```
npm install
npm run dev
```

### Server

Create `.env`:

```
USER_ID=yourUser
PASS_WORD=yourPassword
DB_NAME=yourDB
JWT_SECRET=yourSecret
```

Then run:

```
npm install
npm start
```

---





### Server

* Deploy to Vercel
* Use `vercel.json` for routing

---

