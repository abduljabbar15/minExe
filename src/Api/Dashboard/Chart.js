
const datas = [12, 19, 3, 5]
const datas1 = [10, 2, 7, 31]
const data = {
    labels: ['Java', 'React', 'HTML', 'PHP'],
    datasets: [
        {
            label: '# of Votes',
            fill: true,
            legend: {
                position: 'bottom'
            },
            data: datas,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                '#45C881',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        },
    ],
    hoverOffset: 15
}
const data1 = {
    labels: ['Java', 'React', 'HTML', 'PHP'],
    datasets: [
        {
            label: '# of Votes',
            fill: true,
            legend: {
                position: 'bottom'
            },
            data: datas1,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                '#45C881',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        },
    ],
    hoverOffset: 15
}



const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
        {
            label: "First dataset",
            data: [3, 13, 12, 16, 19, 20, 21, 26, 27],


            animations: {
                tension: {
                    duration: 10000,
                    easing: 'linear',
                    from: .5,
                    to: .2,
                    loop: true
                }
            },
            borderColor: "#45C881"
        },
        {
            label: "Second dataset",
            data: [4, 10, 10, 14, 15, 18, 20, 24, 30],
            animations: {
                tension: {
                    duration: 4000,
                    easing: 'linear',
                    from: .5,
                    to: .2,
                    loop: true
                }
            },

            borderColor: "#FF4069"
        }
    ],
    hoverOffset: 4
};
export { data, data1, lineData } 