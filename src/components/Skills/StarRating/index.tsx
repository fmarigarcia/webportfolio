import React, { useEffect, useMemo, useState } from 'react';
import Star from '@icons/Star';

interface IStarRatingProps {
  value: number;
  size: number;
  starNumber?: number;
}

const StarRating: React.FC<IStarRatingProps> = ({ value, size, starNumber = 5 }) => {
  const [actualValue, setActualValue] = useState(0);
  const starIncrement = 1 / 20;
  const starColors = ['#a50104', '#d15e04', '#fcba04', '#b2ae2a', '#6da34d'];
  useEffect(() => {
    const interval = setInterval(() => {
      if (actualValue < value)
        setActualValue((actualValue: number) => Math.min(Math.round((actualValue + starIncrement) * 100) / 100, value));
    }, 1000 / 60);

    return () => {
      clearInterval(interval);
    };
  }, [actualValue, starIncrement, value]);

  const starValues = useMemo(
    () =>
      Array.from({ length: starNumber }).map(
        (_, i) => Math.round(Math.min(1 / starNumber, actualValue - i / starNumber) * 100) / 100 / (1 / starNumber)
      ),
    [starNumber, actualValue]
  );
  return (
    <div className="flex">
      {starValues.map((starValue, i) => (
        <Star value={starValue} size={size} color={starColors[i]} key={`star_${i}`} />
      ))}
    </div>
  );
};

export default StarRating;
