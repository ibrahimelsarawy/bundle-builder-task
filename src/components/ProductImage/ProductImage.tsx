type Props = {
  category: string;
  image: string;
  title: string;
  discountPercentage?: number;
};

export default function ProductImage({
  category,
  image,
  title,
  discountPercentage,
}: Props) {
  return (
    <>
      {discountPercentage && (
        <span>
          Save {discountPercentage}%
        </span>
      )}

      {category === "plan" ? (
        <div>
          <h2>
            Cam <span>Unlimited</span>
          </h2>
        </div>
      ) : (
        <img
          src={image}
          alt={title}
        />
      )}
    </>
  );
}