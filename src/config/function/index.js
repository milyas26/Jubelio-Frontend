export const FUNCDateToString = (date) => {
  var Date = date.getDate();
  var Month = date.getMonth() + 1;
  var Year = date.getFullYear();
  if (Date < 10) Date = "0" + Date;
  if (Month < 10) Month = "0" + Month;
  return Date + "-" + Month + "-" + Year;
};

export const FUNCMonthToString = (date) => {
  var Month = date.getMonth() + 1;
  var Year = date.getFullYear();
  if (Month < 10) Month = "0" + Month;
  return Month + "-" + Year;
};

export const FUNCParseInputDate = (date) => {
  var SplitDate = date.split("-");
  return SplitDate[2] + "-" + SplitDate[1] + "-" + SplitDate[0];
};

export const FUNCYearToString = (date) => {
  var Year = date.getFullYear();
  return Year;
};

export const FUNCIndoDate = (date) => {
  var SplitTanggal = date.split("-");
  var Hari = SplitTanggal[0];
  var Bulan = SplitTanggal[1];
  var Tahun = SplitTanggal[2];

  var ArrayBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  if (Bulan < 10) {
    Bulan = Bulan.replace("0", "");
  }

  return Hari + " " + ArrayBulan[Bulan - 1] + " " + Tahun;
};

export const FUNCParseIndoDate = (date) => {
  const Tahun = new Date(date).getUTCFullYear();
  const Hari = new Date(date).getDate();
  const Bulan = new Date(date).getMonth() + 1;

  return Tahun + "-" + Bulan + "-" + Hari;
};

export const FUNCSetFullName = (FirstName, MiddleName, LastName) => {
  var satu = FirstName || " ";
  var dua = MiddleName || " ";
  var tiga = LastName || " ";
  return satu + dua + tiga;
};
