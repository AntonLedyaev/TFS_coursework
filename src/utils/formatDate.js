const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
export const formatDate = (date) => new Date(date.replace(pattern,'$3-$2-$1'));