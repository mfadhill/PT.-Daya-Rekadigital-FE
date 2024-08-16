import React, { useEffect, useState } from "react";
import axios from "axios";

interface TotalPriceResponse {
  totalPrice: number;
}

const CustomerTotalPrice: React.FC<{ customerId: number }> = ({
  customerId,
}) => {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalPrice = async () => {
      try {
        const response = await axios.get<TotalPriceResponse>(
          `/api/${customerId}/total-price`
        );
        setTotalPrice(response.data.totalPrice);
      } catch (err) {
        setError("Failed to fetch total price");
      }
    };

    fetchTotalPrice();
  }, [customerId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3>Total Price for Customer {customerId}:</h3>
      {totalPrice !== null ? (
        <p>${totalPrice.toFixed(2)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerTotalPrice;
