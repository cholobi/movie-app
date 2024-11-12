import type { FC } from "react";

interface LogosProps {}

const logoItems: { name: string; url: string; alt: string }[] = [
  {
    name: "netflix",
    alt: "netflix",
    url: "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",
  },

  {
    name: "disney",
    alt: "disney",
    url: "https://image.tmdb.org/t/p/w500/cMn1GNxnxa1q0zStmnFX1jcQvZo.svg",
  },
  {
    name: "pixar",
    alt: "pixar",
    url: "https://image.tmdb.org/t/p/w500/1TjvGVDMYsj6JBxOAkUHpPEwLf7.svg",
  },
  {
    name: "paramount",
    alt: "paramount",
    url: "https://image.tmdb.org/t/p/w500/gz66EfNoYPqHTYI4q9UEN4CbHRc.svg",
  },
  {
    name: "lucasfilm",
    alt: "lucasfilm",
    url: "https://image.tmdb.org/t/p/w500/tlVSws0RvvtPBwViUyOFAO0vcQS.svg",
  },
];

const Logos: FC<LogosProps> = ({}) => {
  return (
    <div className='text-white text-2xl container flex gap-2 mx-auto'>
      {logoItems.map(({ alt, url }) => (
        <figure className='w-32  flex justify-center bg-white px-5 rounded-lg'>
          <img
            src={url}
            alt={alt}
            className='bg-cover '
            width={100}
            height={100}
          />
        </figure>
      ))}
    </div>
  );
};
export default Logos;
