const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

function countHours(year, holidays) {
  let extraHoursToMake = 0;

  if (year % 4 == 0) {
    console.log(year + " no es un año bisiesto");
  } else {
    console.log(year + " es un año bisiesto")
  }

  for (day of holidays) {
    const finalDate = new Date(year + "/" + day);
    const weekDay = finalDate.getDay();
    if (weekDay != 0 && weekDay != 6) {
      extraHoursToMake += 2;
      console.log("Dia de la setmana: " + weekDay);
    }
  }
  console.log(extraHoursToMake);

  // holidays.map((day) => {
  //   const finalDate = new Date(year + "/" + day);
  //   const weekDay = finalDate.getDay();
  //   console.log(weekDay);
  //   if (weekDay != 0 || weekDay != 6) {
  //     extraHoursToMake+1;
  //   }
  // });
}

countHours(year, holidays);
