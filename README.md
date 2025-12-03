# React Redux with Slice

A simple React application demonstrating state management using Redux Toolkit with `createSlice` API. This project showcases CRUD operations (Create, Read, Update, Delete) for managing a product inventory.

## 🚀 Features

- **Add Products**: Create new products with name and quantity
- **Edit Products**: Update existing product details
- **Delete Products**: Remove products from the inventory
- **Redux Toolkit Integration**: Uses modern Redux patterns with `createSlice`
- **React Hooks**: Leverages `useSelector`, `useDispatch`, `useState`, `useEffect`, and `useRef`
- **Auto-focus**: Input field automatically focuses on component mount

## 📦 Technologies

- **React 19.0.0** - UI library
- **Redux Toolkit 2.11.0** - State management
- **React-Redux 9.2.0** - React bindings for Redux
- **React Scripts 5.0.0** - Build tooling

## 🏗️ Project Structure

```
react-redux-with-slice/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point with Redux Provider
│   ├── Product.js          # Product management component
│   ├── store.js            # Redux store configuration
│   ├── styles.css          # Application styles
│   └── reducers/
│       └── productSlice.js # Redux slice with actions and reducers
├── package.json
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/sab221b/react-redux-with-slice.git
cd react-redux-with-slice
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎯 How It Works

### Redux Store Setup

The application uses Redux Toolkit's `configureStore` to set up the store with the product slice:

```javascript
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
```

### Product Slice

The `productSlice` manages the product state with three reducers:

- **createProduct**: Adds a new product to the list
- **editProduct**: Updates an existing product's details
- **removeProduct**: Removes a product from the list

### Component Features

The `Product` component provides:
- Form to add/edit products with name and quantity fields
- List view of all products
- Edit button to populate form with existing product data
- Delete button to remove products
- Visual feedback with backdrop effect when editing

## 🎨 Initial State

The application comes pre-loaded with sample products:
- Hamam (Quantity: 14)
- Cinthol (Quantity: 8)
- Dettol (Quantity: 3)

## 📚 Learning Outcomes

This project demonstrates:
- Setting up Redux Toolkit in a React application
- Creating slices with `createSlice`
- Using `useSelector` to read state
- Dispatching actions with `useDispatch`
- Managing form state with React hooks
- Implementing CRUD operations with Redux

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**sab221b**

---

Happy coding! 🎉
