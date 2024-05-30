## Step-by-Step Instructions: <br>
Step 1: Create the Main Application Component (App.jsx)<br>
    ** Initialize State: Use useState to create a state variable for the list of products (products).**
    const [products, setProducts] = useState([
        {
            id: "pid-1",
            name: "Product 1",
            price: 10.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
            isSelected: false,
        },
        {
            id: "pid-2",
            name: "Product 2",
            price: 10.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
            isSelected: false,
        },
    ])
Step 2: Create the ProductList Component (ProductList.jsx)<br>
Step 3: Create the ProductForm Component (ProductForm.jsx)<br>

### Tasks:<br>
1. Implement the Components: Follow the instructions above to implement App, ProductList, and ProductForm components.<br>
2. Understand Props: Make sure to understand how data and functions are passed as props from the App component to ProductList and ProductForm.<br>
3. State Management: Pay attention to how useState is used to manage the state in each component. <br>
