import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';

export default function RestaurantDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <p className="text-gray-600">{restaurant.cuisine}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>
          <div className="space-y-4">
            {restaurant.menu.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <p className="text-primary font-semibold mt-1">${item.price}</p>
                </div>
                <button
                  onClick={() => addToCart({ ...item, restaurantId: restaurant.id })}
                  className="bg-primary text-white p-2 rounded-full hover:bg-red-600"
                >
                  <FiPlus />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}