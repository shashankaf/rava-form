export function courseType(course) {
  if (course === "hourly") {
    return "بە کاتژمێر";
  } else if (course === "private") {
    return "تایبەت";
  } else {
    return "هاوینە";
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const monthsKurdish = [
    "کانوونی دووەم",
    "شوبات",
    "ئازار",
    "نیسان",
    "ئایار",
    "حوزەیران",
    "تیر",
    "ئاب",
    "ئەیلوول",
    "تشرینی یەکەم",
    "تشرینی دووەم",
    "کانوونی یەکەم",
  ];
  const day = date.getDate();
  const month = monthsKurdish[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}
