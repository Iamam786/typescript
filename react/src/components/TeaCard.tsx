
interface TeaCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function TeaCard({name,price,isSpecial=false}: TeaCardProps) {
  return (
    <div className="tea-card">
      <h2>Tea {name} is  Card</h2>
      <p>Price: ${price.toFixed(2)}</p>
      {isSpecial && <p className="special">Special Offer!</p>}
    </div>
  );
}