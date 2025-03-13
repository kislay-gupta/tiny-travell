import CardSkeleton from "../CardSkeleton";

export const LoadingCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {[1, 2, 3, 4, 5, 6].map((index) => (
      <CardSkeleton key={index} />
    ))}
  </div>
);
