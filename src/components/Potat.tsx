import { Rating } from 'flowbite-react';
import { PotatIcon } from './Icon';

export function Potat({
  name,
  averageRating,
  infoLink,
  initialComment,
}: {
  name: string;
  averageRating: number;
  infoLink: string;
  initialComment: string;
}) {
  return (
    <div className="flex flex-col items-center mb-12 mx-auto max-w-md px-8">
      <div className="flex gap-3 items-center">
        <PotatIcon />
        <div className="flex flex-col">
          <h2 className="flex text-lg font-bold items-center mb-0">{name}</h2>
          <div className="flex items-center text-sm justify-center">
            {infoLink && (
              <a
                className="font-medium text-blue-400 dark:text-blue-200 hover:underline"
                href={infoLink}
                target="_blank">
                info
              </a>
            )}
          </div>
        </div>
      </div>
      {averageRating !== 0 ? (
        <>
          <Rating size="lg">
            {Array.from({ length: 5 }).map((_, i) => {
              const r = i + 1;
              if (r <= averageRating) {
                return <Rating.Star key={r} className="hover:cursor-pointer" />;
              }
              return (
                <Rating.Star
                  key={r}
                  filled={false}
                  className="hover:cursor-pointer"
                />
              );
            })}
          </Rating>
          <p className="my-2 text-center">{initialComment}</p>
        </>
      ) : null}
    </div>
  );
}
