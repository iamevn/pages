const diffChart = new Chart(
  'diffChart', {
    type: 'bar',
    data: {
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
      ],
      datasets: [{
        label: 'Charts',
        backgroundColor: 'rgba(155, 99, 232, 0.5)',
        data: [
          1, 1, 0, 0, 0, 1, 6, 4, 4, 1,
          4, 3, 3, 5, 5, 4, 5, 10, 11, 16,
          17, 28, 24, 26, 17, 11, 13, 7, 15, 15,
          20, 23, 16, 19, 16, 23, 24, 18, 22, 23,
          23, 18, 25, 18, 18, 8, 4, 1, 1, 0,
        ],
      }, ],
    },
    options: {
    	title: {
      	display: true,
        text: 'Charts by difficulty',
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 5,
            beginAtZero: true,
          },
        }, ],
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          title: (tt) => `Level: ${tt[0].label}`,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },
);

const diff5Chart = new Chart(
  'diff5Chart', {
    type: 'bar',
    data: {
      labels: [
        '1-5', '6-10', '11-15', '16-20', '21-25',
        '26-30', '31-35', '36-40', '41-45', '46-50',
      ],
      datasets: [{
        label: 'Charts',
        backgroundColor: 'rgba(155, 99, 232, 0.5)',
        data: [4, 17, 20, 46, 112, 61, 94, 110, 102, 14],
      }, ],
    },
    options: {
    	title: {
      	display: true,
        text: 'Charts by difficulty grouped by 5',
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 20,
            beginAtZero: true,
          },
        }, ],
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          title: (tt) => `Levels: ${tt[0].label}`,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

const diff10Chart = new Chart(
  'diff10Chart', {
    type: 'bar',
    data: {
      labels: ['1-10', '11-20', '21-30', '31-40', '41-50'],
      datasets: [{
        label: 'Charts',
        backgroundColor: 'rgba(155, 99, 232, 0.5)',
        data: [21, 66, 173, 204, 116],
      }, ],
    },
    options: {
    	title: {
      	display: true,
        text: 'Charts by difficulty grouped by 10',
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 20,
            beginAtZero: true,
          },
        }, ],
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          title: (tt) => `Levels: ${tt[0].label}`,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

const gamesChart = new Chart(
  'gamesChart', {
    type: 'bar',
    data: {
      labels: [
        '1', '2', '3', '4', '5', '6',
        '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24',
        '25', 'eeMALL',
      ],
      datasets: [{
        label: 'Songs',
        backgroundColor: 'rgba(155, 99, 232, 0.5)',
        data: [
          6, 3, 4, 7, 7, 6,
          11, 12, 14, 18, 14, 14,
          14, 16, 7, 6, 4, 5,
          4, 6, 5, 3, 4, 4,
          4, 3,
        ],
      }, ],
    },
    options: {
    	title: {
      	display: true,
        text: 'Songs per game',
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 5,
            beginAtZero: true,
          },
        }, ],
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          title: (tt) => `${isNaN(tt[0].label) ? '' : 'Pop\'n '}${tt[0].label}:`,
          label: (tt) => `${tt.value} songs`,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  },
);
