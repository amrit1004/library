interface Book{
    id: number,
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    cover: string;
    color: string; 
    video: string;
    summary: string;
    isLoanedBook?: boolean;
}