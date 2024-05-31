import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import ProductForm from "./components/ProductForm";
import ProductDashboard from "./components/ProductDashboard";

function App() {
	const [products, setProducts] = useState([
		{
			id: "pid-1",
			name: "Product 1",
			price: 10.0,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
			isSelected: false,
		},
		{
			id: "pid-2",
			name: "Product 2",
			price: 10.0,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
			isSelected: false,
		},
	]);

	function createProduct(product) {
		setProducts.push(product);
	}

	return (
		<>
			<div className="flex flex-col lg:flex-row items-center lg:items-start w-fit gap-4">
				<ProductForm createProduct={createProduct} />
				<ProductDashboard productList={products} />
			</div>
		</>
	);
}

export default App;
