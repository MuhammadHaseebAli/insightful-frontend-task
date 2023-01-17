const summary = {
    totalEmployees: 10,
    totalClockedInTime: 30,
    totalAmountPaidRegular: 2300,
    totalAmountPaidOvertime: 1500
};
const employeesList = [
    {
      "id": 1,
      "name": "Hernandez Hess",
      "email": "hernandezhess@urbanshee.com",
      "hourlyRate": 19,
      "overtimeHourlyRate": 27,
      "totalClockedInTime": 219,
      "totalAmountPaidRegular": 360,
      "totalAmountPaidOvertime": 18,
      "status": "active",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "02:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "12:00"
        }
      ]
    },
    {
      "id": 2,
      "name": "Ochoa Brewer",
      "email": "ochoabrewer@urbanshee.com",
      "hourlyRate": 19,
      "overtimeHourlyRate": 24,
      "totalClockedInTime": 238,
      "totalAmountPaidRegular": 336,
      "totalAmountPaidOvertime": 21,
      "status": "active",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "02:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        }
      ]
    },
    {
      "id": 3,
      "name": "Austin Owens",
      "email": "austinowens@urbanshee.com",
      "hourlyRate": 15,
      "overtimeHourlyRate": 24,
      "totalClockedInTime": 209,
      "totalAmountPaidRegular": 361,
      "totalAmountPaidOvertime": 17,
      "status": "inactive",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:32"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        }
      ]
    },
    {
      "id": 4,
      "name": "Ilene Hardin",
      "email": "ilenehardin@urbanshee.com",
      "hourlyRate": 15,
      "overtimeHourlyRate": 26,
      "totalClockedInTime": 220,
      "totalAmountPaidRegular": 357,
      "totalAmountPaidOvertime": 16,
      "status": "active",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        }
      ]
    },
    {
      "id": 5,
      "name": "Jacqueline Alexander",
      "email": "jacquelinealexander@urbanshee.com",
      "hourlyRate": 15,
      "overtimeHourlyRate": 27,
      "totalClockedInTime": 151,
      "totalAmountPaidRegular": 340,
      "totalAmountPaidOvertime": 16,
      "status": "inactive",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "02:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        }
      ]
    },
    {
      "id": 6,
      "name": "Beth Walters",
      "email": "bethwalters@urbanshee.com",
      "hourlyRate": 20,
      "overtimeHourlyRate": 22,
      "totalClockedInTime": 166,
      "totalAmountPaidRegular": 399,
      "totalAmountPaidOvertime": 22,
      "status": "active",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        }
      ]
    },
    {
      "id": 7,
      "name": "Margarita Huffman",
      "email": "margaritahuffman@urbanshee.com",
      "hourlyRate": 20,
      "overtimeHourlyRate": 22,
      "totalClockedInTime": 204,
      "totalAmountPaidRegular": 319,
      "totalAmountPaidOvertime": 15,
      "status": "inactive",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "06:00"
        }
      ]
    },
    {
      "id": 8,
      "name": "Mckenzie Simmons",
      "email": "mckenziesimmons@urbanshee.com",
      "hourlyRate": 19,
      "overtimeHourlyRate": 26,
      "totalClockedInTime": 246,
      "totalAmountPaidRegular": 319,
      "totalAmountPaidOvertime": 16,
      "status": "active",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "05:00"
        }
      ]
    },
    {
      "id": 9,
      "name": "Tara Miles",
      "email": "taramiles@urbanshee.com",
      "hourlyRate": 15,
      "overtimeHourlyRate": 24,
      "totalClockedInTime": 209,
      "totalAmountPaidRegular": 309,
      "totalAmountPaidOvertime": 21,
      "status": "inactive",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "03:00"
        }
      ]
    },
    {
      "id": 10,
      "name": "Mccall Nelson",
      "email": "mccallnelson@urbanshee.com",
      "hourlyRate": 19,
      "overtimeHourlyRate": 21,
      "totalClockedInTime": 243,
      "totalAmountPaidRegular": 373,
      "totalAmountPaidOvertime": 15,
      "status": "inactive",
      "shifts": [
        {
          "shiftNumber": 1,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 2,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 3,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 4,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 5,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 6,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 7,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 8,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 9,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 10,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 11,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 12,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 13,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 14,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 15,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 16,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 17,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 18,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 19,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 20,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 21,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 22,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 23,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 24,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 25,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 26,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 27,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 28,
          "date": "2023-01-25",
          "clockIn": "15:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 29,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 30,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 31,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 32,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 33,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 34,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 35,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 36,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 37,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 38,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "04:00"
        },
        {
          "shiftNumber": 39,
          "date": "2023-01-25",
          "clockIn": "20:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 40,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 41,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 42,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 43,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 44,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 45,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 46,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 47,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 48,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 49,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 50,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "20:00"
        },
        {
          "shiftNumber": 51,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "06:00"
        },
        {
          "shiftNumber": 52,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 53,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 54,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 55,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "05:00"
        },
        {
          "shiftNumber": 56,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 57,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 58,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "09:00"
        },
        {
          "shiftNumber": 59,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 60,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "24:00"
        },
        {
          "shiftNumber": 61,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 62,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 63,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 64,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 65,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 66,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 67,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 68,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 69,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 70,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 71,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 72,
          "date": "2023-01-25",
          "clockIn": "05:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 73,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 74,
          "date": "2023-01-25",
          "clockIn": "03:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 75,
          "date": "2023-01-25",
          "clockIn": "19:00",
          "clockOut": "22:00"
        },
        {
          "shiftNumber": 76,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 77,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "16:00"
        },
        {
          "shiftNumber": 78,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 79,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 80,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 81,
          "date": "2023-01-25",
          "clockIn": "09:00",
          "clockOut": "12:00"
        },
        {
          "shiftNumber": 82,
          "date": "2023-01-25",
          "clockIn": "13:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 83,
          "date": "2023-01-25",
          "clockIn": "17:00",
          "clockOut": "18:00"
        },
        {
          "shiftNumber": 84,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 85,
          "date": "2023-01-25",
          "clockIn": "18:00",
          "clockOut": "23:00"
        },
        {
          "shiftNumber": 86,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "07:00"
        },
        {
          "shiftNumber": 87,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "15:00"
        },
        {
          "shiftNumber": 88,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 89,
          "date": "2023-01-25",
          "clockIn": "16:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 90,
          "date": "2023-01-25",
          "clockIn": "11:00",
          "clockOut": "17:00"
        },
        {
          "shiftNumber": 91,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 92,
          "date": "2023-01-25",
          "clockIn": "14:00",
          "clockOut": "21:00"
        },
        {
          "shiftNumber": 93,
          "date": "2023-01-25",
          "clockIn": "12:00",
          "clockOut": "19:00"
        },
        {
          "shiftNumber": 94,
          "date": "2023-01-25",
          "clockIn": "07:00",
          "clockOut": "11:00"
        },
        {
          "shiftNumber": 95,
          "date": "2023-01-25",
          "clockIn": "01:00",
          "clockOut": "02:00"
        },
        {
          "shiftNumber": 96,
          "date": "2023-01-25",
          "clockIn": "04:00",
          "clockOut": "10:00"
        },
        {
          "shiftNumber": 97,
          "date": "2023-01-25",
          "clockIn": "06:00",
          "clockOut": "14:00"
        },
        {
          "shiftNumber": 98,
          "date": "2023-01-25",
          "clockIn": "10:00",
          "clockOut": "13:00"
        },
        {
          "shiftNumber": 99,
          "date": "2023-01-25",
          "clockIn": "02:00",
          "clockOut": "08:00"
        },
        {
          "shiftNumber": 100,
          "date": "2023-01-25",
          "clockIn": "08:00",
          "clockOut": "12:00"
        }
      ]
    }
  ]
// const employeesList = [{
//     id: 1,
//     name: 'Dragan',
//     email: 'dragan@test.com',
//     hourlyRate: 10,
//     overtimeHourlyRate : 12,
//     totalClockedInTime: 10,
//     totalAmountPaidRegular: 230,
//     totalAmountPaidOvertime: 150,
//     status: 'active'
// },
// {
//     id: 2,
//     name: 'Zoran',
//     email: 'zoran@test.com',
//     hourlyRate: 11,
//     overtimeHourlyRate : 13,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// },
// {
//     id: 3,
//     name: 'Ljiljana',
//     email: 'ljiljana@test.com',
//     hourlyRate: 12,
//     overtimeHourlyRate : 14,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'inactive'
// },
// {
//     id: 4,
//     name: 'Gordana',
//     email: 'gordana@test.com',
//     hourlyRate: 10,
//     overtimeHourlyRate : 12,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// },
// {
//     id: 5,
//     name: 'Milan',
//     email: 'milan@test.com',
//     hourlyRate: 10,
//     overtimeHourlyRate : 12,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// },
// {
//     id: 6,
//     name: 'Goran',
//     email: 'goran@test.com',
//     hourlyRate: 10,
//     overtimeHourlyRate : 12,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'inactive'
// },
// {
//     id: 7,
//     name: 'Aleksandar',
//     email: 'aleksandar@test.com',
//     hourlyRate: 10,
//     overtimeHourlyRate : 12,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// },
// {
//     id: 8,
//     name: 'Radmila',
//     email: 'radmila@test.com',
//     hourlyRate: 10,
//     overtimeHourlyRate : 12,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// },
// {
//     id: 9,
//     name: 'Jelena',
//     email: 'jelena@test.com',
//     hourlyRate: 20,
//     overtimeHourlyRate : 25,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// },
// {
//     id: 10,
//     name: 'Vesna',
//     email: 'vesna@test.com',
//     hourlyRate: 15,
//     overtimeHourlyRate : 20,
//     totalClockedInTime: 11,
//     totalAmountPaidRegular: 231,
//     totalAmountPaidOvertime: 151,
//     status: 'active'
// }];

export {
    summary,
    employeesList
};