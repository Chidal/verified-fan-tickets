import { ComponentType, FC } from 'react';

declare module 'react-rating' {
  interface RatingProps {
    initialRating?: number;
    onChange?: (value: number) => void;
    className?: string;
    [key: string]: any; // Allow additional props for flexibility
  }
  const Rating: FC<RatingProps>;
  export default Rating;
}