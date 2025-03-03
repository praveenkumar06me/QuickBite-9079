import { Link } from 'react-router-dom';
import { FiStar, FiClock } from 'react-icons/fi';

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{restaurant.name}</h3>
          <p className="text-gray-600">{restaurant.cuisine}</p>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <FiStar className="text-yellow-400" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiClock className="text-gray-400" />
              <span>{restaurant.deliveryTime} min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}