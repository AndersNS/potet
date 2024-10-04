import { actions } from 'astro:actions';
import { Rating, Spinner } from 'flowbite-react';
import { useState } from 'react';
function PotatIcon() {
  return (
    <svg
      className="w-12 h-12 text-grey"
      viewBox="0 0 1024 1024"
      version="1.1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M508.058092 1024c-217.565695 0-478.8571-172.319985-505.862812-419.599963-14.319999-131.074274 34.674283-325.851399 349.497111-509.417097C412.572386 59.428658 514.572377 0.000091 636.229509 0.000091a360.514254 360.514254 0 0 1 105.577133 15.725713c127.245703 38.948568 211.028553 139.89713 247.02855 221.382838 63.897137 144.708559 39.359996 349.119969-62.51428 520.777096C834.012348 913.451438 694.640932 1009.897144 544.000946 1022.514286c-11.82857 0.982857-23.897141 1.485714-35.942854 1.485714z"
        fill="#25467A"
      />
      <path
        d="M52.983847 598.857181C25.143849 344.605775 308.332395 179.520075 377.452389 139.222936 450.983811 96.34294 581.555228 20.217232 726.858072 64.6858c102.777134 31.451426 179.885698 113.142847 215.222838 193.14284 108.182847 244.914264-81.245707 686.857082-402.411392 713.691365C325.646679 989.405717 77.269559 820.982875 52.983847 598.857181z"
        fill="#FFDFB3"
      />
      <path
        d="M972.572336 427.520053c-5.382857 238.594264-177.542841 522.628525-432.902818 543.999952C370.435247 985.725718 179.840978 883.428584 95.4867 730.285741a573.42852 573.42852 0 0 0 326.914257 101.714276C680.709505 832.000017 899.429485 661.885747 972.572336 427.520053z"
        fill="#F5D6AC"
      />
      <path
        d="M512.000949 534.182901a64.068566 64.068566 0 0 1-63.999995-63.999994 12.799999 12.799999 0 1 1 25.599998 0 38.399997 38.399997 0 0 0 76.799993 0 12.799999 12.799999 0 1 1 25.599998 0 64.068566 64.068566 0 0 1-63.999994 63.999994z"
        fill="#25467A"
      />
      <path
        d="M384.00096 367.782916m-38.399997 0a38.399997 38.399997 0 1 0 76.799994 0 38.399997 38.399997 0 1 0-76.799994 0Z"
        fill="#25467A"
      />
      <path
        d="M640.000937 367.782916m-38.399996 0a38.399997 38.399997 0 1 0 76.799993 0 38.399997 38.399997 0 1 0-76.799993 0Z"
        fill="#25467A"
      />
      <path
        d="M332.800965 431.78291h-51.199996a25.599998 25.599998 0 1 0 0 51.199995h51.199996a25.599998 25.599998 0 1 0 0-51.199995zM742.400928 431.78291h-51.199995a25.599998 25.599998 0 1 0 0 51.199995h51.199995a25.599998 25.599998 0 0 0 0-51.199995z"
        fill="#FAAD96"
      />
      <path
        d="M153.600981 627.200035m-25.599998 0a25.599998 25.599998 0 1 0 51.199995 0 25.599998 25.599998 0 1 0-51.199995 0Z"
        fill="#FFCA80"
      />
      <path
        d="M358.400962 883.200013m-25.599997 0a25.599998 25.599998 0 1 0 51.199995 0 25.599998 25.599998 0 1 0-51.199995 0Z"
        fill="#FFCA80"
      />
      <path
        d="M780.800925 704.000029m-25.599998 0a25.599998 25.599998 0 1 0 51.199995 0 25.599998 25.599998 0 1 0-51.199995 0Z"
        fill="#FFCA80"
      />
      <path
        d="M780.800925 627.200035m-25.599998 0a25.599998 25.599998 0 1 0 51.199995 0 25.599998 25.599998 0 1 0-51.199995 0Z"
        fill="#FFCA80"
      />
      <path
        d="M230.400974 665.600032m-25.599998 0a25.599998 25.599998 0 1 0 51.199995 0 25.599998 25.599998 0 1 0-51.199995 0Z"
        fill="#FFCA80"
      />
      <path
        d="M294.400968 832.000017m-25.599998 0a25.599998 25.599998 0 1 0 51.199996 0 25.599998 25.599998 0 1 0-51.199996 0Z"
        fill="#FFCA80"
      />
      <path
        d="M192.000977 729.600026m-25.599998 0a25.599998 25.599998 0 1 0 51.199996 0 25.599998 25.599998 0 1 0-51.199996 0Z"
        fill="#FFCA80"
      />
      <path
        d="M857.600918 652.800033m-25.599998 0a25.599998 25.599998 0 1 0 51.199995 0 25.599998 25.599998 0 1 0-51.199995 0Z"
        fill="#FFCA80"
      />
    </svg>
  );
}

export function Potatoe({
  potatoId,
  name,
  andersInitialRating,
  linnInitialRating,
  infoLink,
}: {
  potatoId: string;
  name: string;
  andersInitialRating: number;
  linnInitialRating: number;
  infoLink: string;
}) {
  const [andersRatingRating, setAndersRatingRating] =
    useState(andersInitialRating);
  const [andersLoading, setAndersLoading] = useState(false);

  const [linnRating, setLinnRating] = useState(linnInitialRating);
  const [linnLoading, setLinnLoading] = useState(false);

  async function updateRating(current: number, person: 'anders' | 'linn') {
    if (person === 'anders') {
      setAndersLoading(true);
      const newRating = await actions.updateAndersRating({ potatoId, current });
      setAndersRatingRating(newRating.data!);
      setAndersLoading(false);
    }

    if (person === 'linn') {
      setLinnLoading(true);
      const newRating = await actions.updateLinnRating({ potatoId, current });
      setLinnRating(newRating.data!);
      setLinnLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center mb-12 w-full">
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
      <p className="mt-2">Anders:</p>
      {andersLoading ? (
        <Spinner aria-label="Updating potats" />
      ) : (
        <Rating size="lg">
          {Array.from({ length: 5 }).map((_, i) => {
            const r = i + 1;
            if (r <= andersRatingRating) {
              return (
                <Rating.Star
                  onClick={() => updateRating(r - 1, 'anders')}
                  className="hover:cursor-pointer"
                />
              );
            }
            return (
              <Rating.Star
                filled={false}
                onClick={() => updateRating(r, 'anders')}
                className="hover:cursor-pointer"
              />
            );
          })}
        </Rating>
      )}
      Linn:
      {linnLoading ? (
        <Spinner aria-label="Updating potats" />
      ) : (
        <Rating size="lg">
          {Array.from({ length: 5 }).map((_, i) => {
            if (linnLoading) {
              return <Spinner aria-label="Updating potats" />;
            }
            const r = i + 1;
            if (r <= linnRating) {
              return (
                <Rating.Star
                  onClick={() => updateRating(r - 1, 'linn')}
                  className="hover:cursor-pointer"
                />
              );
            }
            return (
              <Rating.Star
                filled={false}
                onClick={() => updateRating(r, 'linn')}
                className="hover:cursor-pointer"
              />
            );
          })}
        </Rating>
      )}
    </div>
  );
}
