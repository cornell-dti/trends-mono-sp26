// How would you make an interface for this?
const book : Book = {
    title: "The Pragmatic Programmer",
    author: {
        firstName: "Andrew",
        lastName: "Hung"
    },
    yearPublished: 1999,
    genres: ["programming", "software engineering"],
    available: true,
}

interface Book {
    title: string;
    author : {
        firstName: string;
        lastName: string;
    };
    yearPublished: number;
    genres: string[];
    available: boolean;
    ratings?: {
        average: number;
        count: number;
    }
}