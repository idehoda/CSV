export const dateStringToDate = (dateString: string): any => {
    //'10/08/2018',
    const [day, month, year] = dateString.split('/')
       .map((datePart: string) => parseInt(datePart));
    return new Date(year, month - 1, day).toDateString()
}