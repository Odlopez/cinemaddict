import {filmNames,
  posters,
  descriptionFish,
  genres,
  MAX_QUANTITY_SENTENCES,
  MIN_QUANTITY_SENTENCES,
  MIN_QUANTITY_GENRES,
  MAX_QUANTITY_COMMENTS,
  MAX_COMMENT_LENGTH,
  MAX_FILM_DURATION,
  MIN_FILM_DURATION,
  MAX_RATING,
  MAX_AGE,
  MAX_YEAR,
  MIN_YEAR,
  MAX_QUANTUTY_MONTHS,
  MAX_QUANTITY_DAYS} from '../constants';
import {getRandomNumber, getRandomItem, sortFisherYates} from '../utils';

const cloneFilmNames = sortFisherYates(filmNames, true);
const descriptionSentences = descriptionFish.split(`\n`);

/**
 * Генерирует описание к фильму
 *
 * @return {String} строка с описанием фильма
 */
const getMockDescription = () => {
  const sentencesQuantity = getRandomNumber(MAX_QUANTITY_SENTENCES, MIN_QUANTITY_SENTENCES);

  return sortFisherYates(descriptionSentences, true)
  .slice(0, sentencesQuantity)
  .join(` `);
};

/**
 * Генерирует массив жанров киноленты
 *
 * @return {Array} случайный массив с жанрами
 */
const getRandomGenresArray = () => {
  const quantityGenres = getRandomNumber(genres.length, MIN_QUANTITY_GENRES);

  return sortFisherYates(genres, true).slice(0, quantityGenres);
};

/**
 * Генерирует массив комментариев
 *
 * @return {Array} случайный массив с комментариями
 */
const getRandomCommentsArray = () => {
  const quantityComments = getRandomNumber(MAX_QUANTITY_COMMENTS);

  return new Array(quantityComments)
  .fill(``)
  .map(() => descriptionFish.substr(getRandomNumber(descriptionFish.length), MAX_COMMENT_LENGTH));
};

/**
 * Возвращает случаную дату
 *
 * @return {Number} случаная дата в миллисекундах
 */
const getRandomDate = () => new Date(getRandomNumber(MAX_YEAR, MIN_YEAR), getRandomNumber(0, MAX_QUANTUTY_MONTHS), getRandomNumber(1, MAX_QUANTITY_DAYS)).getTime();

/**
 * Генерирует объект с моковыми данными для карточки фильма
 *
 * @return {Object}
 */
export const getFilmDataObject = () => {
  return {
    name: cloneFilmNames.pop(),
    director: `Anthony Mann`,
    writers: [`Anne Wigton`, `Heinz Herald`, `Richard Weil`],
    actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`],
    country: `Uganda`,
    poster: getRandomItem(posters),
    rating: (getRandomNumber(MAX_RATING * 10, 10) / 10).toFixed(1),
    date: getRandomDate(),
    duration: getRandomNumber(MAX_FILM_DURATION, MIN_FILM_DURATION),
    genres: getRandomGenresArray(),
    description: getMockDescription(),
    comments: getRandomCommentsArray(),
    age: getRandomNumber(MAX_AGE),
    watchlist: !!getRandomNumber(1),
    history: !!getRandomNumber(1),
    favorites: !!getRandomNumber(1)
  };
};
