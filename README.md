A Fully Functional ECommerce frontend Application built with Next.js, 
featuring Product Listing, Single Product page, Wishlist, cart and Checkout flow.

🚀 Features
🛍️ Product Listing  
  - Fetched Product Data from Fake Store API
  - List all the products with Title, Price and Short Description

🔍 Product Details 
  - Displays the details of single product with Title, Price, Description
  - Displays the Rating Details
  - Allows to add Product to Cart/ Add Items to Wishlist

🛒 Cart Management
  - Add Products to Cart
  - Increase/Decrease Product Quantity
  - Remove item from Cart
  - Persist Cart Data using LocalStorage
  - Display Total and SubTotal Amount

❤️ Wishlist
  - Add/Remove Item in Wishlist
  - Persist Wishlist Data using LocalStorage

📦 Checkout
  - Created Checkout Page with Cart Summary
  - Added Basic Checkout form 
  - Place Order Flow

🧑‍💻 Tech Stack
  - FrameWork: Next.js (App Router)
  - Frontend: React
  - State Management: React Hooks
  - Styling: MUI / CSS
  - Storage: localStorage

store-app
│   ├── images
│   │   └── ratings #loads rating star images
│   │       ├── rating-0.png
│   │       ├── rating-10.png
│   │       ├── rating-15.png
│   │       ├── rating-20.png
│   │       ├── rating-25.png
│   │       ├── rating-30.png
│   │       ├── rating-35.png
│   │       ├── rating-40.png
│   │       ├── rating-45.png
│   │       ├── rating-5.png
│   │       └── rating-50.png
└── src
    └── app
        ├── assets #loads icon used in the app
        │   └── images
        │       ├── .DS_Store
        │       ├── arrow.png
        │       ├── cart.jpeg
        │       ├── check.png
        │       ├── delete.png
        │       ├── empty-cart.png
        │       ├── heart.png
        │       ├── sad-face.png
        │       ├── shopora-logo.png
        │       ├── wishList.png
        │       └── wishlist-black.png
        ├── cart
        │   ├── cart.css 
        │   └── page.js #cart page
        ├── checkout
        │   ├── checkout.css
        │   └── page.js #checkout page
        ├── components
        │   ├── header
        │   │   ├── Header.css
        │   │   └── Header.js #header component
        │   ├── home
        │   │   └── HomePage.js #product listing page
        │   ├── message
        │   │   ├── MessageComponent.css
        │   │   └── MessageComponent.js #show message component
        │   ├── price
        │   │   ├── PriceSummary.css
        │   │   └── PriceSummary.js #displays price details
        │   └── productGrid
        │       ├── ProductGrid.css
        │       └── ProductGrid.js #product card
        ├── favicon.ico
        ├── globals.css
        ├── layout.js
        ├── page.js
        ├── page.module.css
        ├── product 
        │   └── [id]
        │       ├── page.js #single product details
        │       ├── productDetail.css
        │       └── productDetail.js
        └── wishlist
            └── page.js #wishlist page

⚙️ Installation & Setup
1. Clone the repository
    git clone https://github.com/shalinisivaram/store-app
2. Navigate to project
    cd store-app
3. Install dependencies
    npm install
4. Run the app
    npm run dev

Open 👉 http://localhost:3000


