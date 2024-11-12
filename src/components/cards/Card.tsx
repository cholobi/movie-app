import type { FC } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  poster_path?: string;
  title?: string;
  release_date?: string;
  id?: string;
  vote_average?: number;
  imageClassName?: string;
  figClass?: string;
}

// img-cover rounded-lg hover:scale-95 transition-all

const Card: FC<CardProps> = ({
  poster_path,
  title,
  release_date,
  id,
  vote_average,
  imageClassName,
  figClass,
}) => {
  return (
    <>
      {id ? (
        <Link to={`/details/${id}`} className='flex flex-col' id={id}>
          <div className='mt-6 border-none rounded-md transition-all relative'>
            <figure className={`${figClass}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={400}
                height={400}
                className={imageClassName}
              />
            </figure>
          </div>
          <div className=''>
            <h2 className='text-white font-bold text-sm '>{title}</h2>
            <p className='text-white text-sm'>{release_date}</p>
            <div className='flex items-center'>
              {id && (
                <span className='material-symbols-rounded text-yellow-500 '>
                  star
                </span>
              )}
              <p className='text-sm'>{vote_average}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className='flex flex-col'>
          <div className='mt-6 border-none rounded-md transition-all relative'>
            <figure className={`${figClass}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={400}
                height={400}
                className={imageClassName}
              />
            </figure>
          </div>
          <div className=''>
            <h2 className='text-white font-bold text-sm '>{title}</h2>
            <p className='text-white text-sm'>{release_date}</p>
            <div className='flex items-center'>
              {id && (
                <span className='material-symbols-rounded text-yellow-500 '>
                  star
                </span>
              )}
              <p className='text-sm'>{vote_average}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
