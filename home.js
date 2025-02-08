const ctx = document.getElementById('myChart');
const ctm = document.getElementById('myhart');
//weekly
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Food', 'Social Life', 'Pets', 'Transport', 'Household', 'Education','Others'],
        datasets: [{
            label: '# of Votes',
            data: [30,50,60,35,52,27,29],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        let value = tooltipItem.raw;
                        return `₹ ${value.toFixed(2)}`;
                    }
                }   
            }
        }
    }
});
//monthly
new Chart(ctm, {
    type: 'pie',
    data: {
        labels: ['Food', 'Social Life', 'Pets', 'Transport', 'Household', 'Education','Others'],
        datasets: [{
            label: '# of Votes',
            data: [3,5,6,8,5,2,6],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        let value = tooltipItem.raw;
                        return `₹ ${value.toFixed(2)}`;
                    }
                }   
            }
        }
    }
});