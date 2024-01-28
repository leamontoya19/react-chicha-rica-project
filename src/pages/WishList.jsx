import { useWishList } from "../hooks/WishListContext";
import "../styles/WishList.css"; // Asegúrate de tener un archivo CSS asociado

const WishList = () => {
  const { wishList } = useWishList();

  return (
    <div className="wish-container">
      <h2>Wish List</h2>
      <div className="wishlist-items">
        {wishList.map((img, index) => (
          
          <div key={index}>
            {img ? (
              <>    <div className="wish-img" ><img src={`img/${img.url}`} alt={img.title} /></div>
                {img.title} - {img.price}€
                {/* ... (otras propiedades del libro) */}
              </>
            ) : (
              <span>Tu wishList</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
