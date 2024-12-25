# Book Management System

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

A modern, feature-rich book management system built with React and Vite. This system includes user authentication, an intuitive dashboard, and a sleek UI for efficient book management.

---

## ✨ Features

- **Secure User Authentication:** JWT-based login and registration with persistent sessions.
- **Admin Dashboard:** Comprehensive controls for managing books and user activity.
- **Book Management:** Full CRUD functionality for books.
- **Powerful Search:** Quickly find books with an optimized search tool.
- **Form Validation:** Seamless input validation for error-free user experience.
- **Modern UI:** Built with TailwindCSS for a clean and responsive design.
- **RTL Support:** Fully compatible with right-to-left languages.
- **High Performance:** Optimized with Vite for fast development and production builds.

---

## 🔎 Future Improvements

- **Responsive Design:** Enhance mobile and tablet usability.
- **Advanced Dashboard Features:** Add analytics and detailed user management.
- **Real-time Updates:** Enable live data synchronization.
- **Mobile View Optimization:** Streamline for smaller devices.

---

## 🚀 Tech Stack

- **Frontend Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
- **State Management:** [React Query](https://tanstack.com/query/latest)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Form Validation:** Custom validation logic
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 📦 Installation

### Backend Setup

Before setting up the frontend, ensure that you clone and run the backend project. The backend is developed using Node.js and Express and can be started with the following steps:

1. **Clone the backend repository:**
   ```bash
   git clone <backend-repo-url>
   ```
2. **Navigate to the backend directory:**
   ```bash
   cd backend-directory
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the backend server:**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Clone the frontend repository:**
   ```bash
   git clone https://github.com/keihanaf/Books-rtl.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd book-management-system
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a `.env` file:**
   Add the following environment variable in the root directory:
   ```env
   VITE_BASE_URL=your_api_base_url
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🗼 Project Structure

```plaintext
src/
├── assets/       # Static assets (SVGs, images)
├── components/   # Reusable React components
│   ├── HOC/      # Higher Order Components
│   ├── modules/  # Modular components
│   └── templates/# Page templates
├── configs/      # Configuration files
├── context/      # React Context providers
├── hooks/        # Custom React hooks
├── layout/       # Layout components
├── pages/        # Page components
├── router/       # Routing setup
├── services/     # API services
├── styles/       # Global and scoped styles
└── utils/        # Utility functions
```

---

## 🔑 Key Features Explained

### **Authentication**

- JWT-based secure authentication.
- Persistent login state with cookies.
- Protected routes for authorized users.

### **Book Management**

- **Pagination:** Easily navigate through large book collections.
- **CRUD:** Create, read, update, and delete books effortlessly.
- **Search:** Quick and efficient book searching.

### **Dashboard**

- **Admin Controls:** Manage books and monitor user activity.
- **React Query Integration:** Real-time data fetching and caching.
- **Interactive Modals:** Streamlined UI for adding or editing books.

---

## 🎨 UI Components

- **Custom Modals:** Dynamic and reusable modal system.
- **Loading Spinners:** Indicate processing states.
- **Toast Notifications:** Provide user feedback.
- **Data Tables:** Display and manage tabular data.
- **Custom Inputs:** Stylish and validated form fields.
- **SVG Icons:** Enhance UI aesthetics.

---

## 🔧 Configuration

Key configuration files:

- `tailwind.config.js`: TailwindCSS configuration.
- `vite.config.js`: Vite build settings.
- `src/configs/api.js`: API configuration and interceptors.
- `src/configs/reactQuery.js`: Default React Query options.

---

## ⚠️ Current Limitations

- **Desktop-Only Design:** Not optimized for mobile or tablet devices.
- **Fixed Layouts:** Some components lack responsive scaling.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Key areas needing attention:

- Responsive design implementation.
- Mobile and tablet optimizations.
- Enhanced dashboard features.

---

## 🔖 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Languages and Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,vite,tailwind,vscode" />
  </a>
</p>

## 🙏 Acknowledgments

Special thanks to the creators of these tools and libraries:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [DaisyUI](https://daisyui.com/)
