import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHome } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-bold">FoodHub</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary">
              <FiHome size={24} />
            </Link>
            <div className="relative">
              <FiShoppingCart size={24} className="text-gray-600 hover:text-primary" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}