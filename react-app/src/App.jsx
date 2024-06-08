import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductDashboard from "./components/ProductDashboard";

function App() {
	const [productList, setProductList] = useState([
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

	return (
		<>
			<div className="flex flex-col lg:flex-row items-center lg:items-start w-fit gap-4">
				<ProductForm setProductList={setProductList} />
				<ProductDashboard productList={productList} />
			</div>
		</>
	);
}

export default App;
