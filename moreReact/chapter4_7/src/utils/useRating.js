const useRating = (ratingString) => {
    //  format is 100 , 200 , 300+, 4k+, 20k+.
    if (ratingString.endsWith('+')) {
        ratingString = ratingString.slice(0, -1); // Remove the "+" suffix
        if (ratingString.endsWith('K')) {
            ratingString = ratingString.slice(0, -1); // Remove the "k" suffix
            return parseInt(ratingString) * 1000;
        } else {
            return parseInt(ratingString);
        }
    } else {
        return parseInt(ratingString);
    }
}

export default useRating;