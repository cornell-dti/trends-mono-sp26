// Design a function that takes several arguments and returns an OptionalRatingBook
interface Author {
    firstName : string;
    lastName : string;
}

interface Ratings {
    average: number;
    count: number;
}

interface OptionalRatingBook {
    title: string;
    author: Author;
    yearPublished: number;
    genres: object;
    available: boolean;
    ratings?: Ratings;
}

const createBook = (title : string, author : Author, yearPublished : number, genres : object, available: boolean, ratings? : Ratings) : OptionalRatingBook => {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres,
        available: available,
        ratings: ratings
    }
}