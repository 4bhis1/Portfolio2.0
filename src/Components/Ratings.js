import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Function to determine star types based on rating
const Stars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return stars.map((type, index) =>
    type === "full" ? (
      <FaStar key={index} color="gold" />
    ) : type === "half" ? (
      <FaStarHalfAlt key={index} color="gold" />
    ) : (
      <FaRegStar key={index} color="gray" />
    )
  );
};

export default Stars;
