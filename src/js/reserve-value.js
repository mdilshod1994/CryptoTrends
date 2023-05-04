const ctx = document.getElementById('market-pair');

const doughnutLabelsLine = {
    id: 'doughnutLabelsLine',
    afterDraw(chart, args, options) {
        const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart
        chart.data.datasets.forEach((dataset, i) => {
            chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
                // const { x, y } = datapoint.getCenterPoint(),
                //     halfOfChart = datapoint.x,
                //     startAngle = datapoint.startAngle,
                //     endAngle = datapoint.endAngle,
                //     color = datapoint.options.backgroundColor,
                //     currAngle = ((endAngle - startAngle) / 2) + startAngle,
                //     extraLine = x + 55 * Math.cos(currAngle) >= halfOfChart ? 20 : -20,
                //     extraSpace = x + 55 * Math.cos(currAngle) >= halfOfChart ? 25 : -25,
                //     textWidth = ctx.measureText(chart.data.labels[index]).width,
                //     extraSpaceWord = x + 55 * Math.cos(currAngle) >= halfOfChart ? 35 : -35

                // //draw line

                // ctx.strokeStyle = color
                // ctx.lineWidth = '1'
                // ctx.beginPath()
                // ctx.moveTo(x + 40 * Math.cos(currAngle), y + 40 * Math.sin(currAngle))
                // ctx.lineTo(x + 55 * Math.cos(currAngle), y + 55 * Math.sin(currAngle))
                // ctx.lineTo(x + 55 * Math.cos(currAngle) + extraLine, y + 55 * Math.sin(currAngle))
                // ctx.stroke()
                // ctx.closePath()
                // ctx.beginPath()
                // ctx.arc(x + 55 * Math.cos(currAngle) + extraSpace, y + 55 * Math.sin(currAngle), 3, 0, 2 * Math.PI);
                // ctx.stroke()
                // ctx.font = '12px Mont'
                // ctx.textBaseline = 'middle'
                // ctx.textAlign = halfOfChart > x ? 'right' : 'left'
                // ctx.fillText(chart.data.labels[index], x + 55 * Math.cos(currAngle) + extraSpaceWord, y + 55 * Math.sin(currAngle))


                const { x, y } = datapoint.getCenterPoint(),
                    halfOfChart = datapoint.x,
                    startAngle = datapoint.startAngle,
                    endAngle = datapoint.endAngle,
                    color = datapoint.options.backgroundColor,
                    currAngle = ((endAngle - startAngle) / 2) + startAngle,
                    extraLine = x + 55 * Math.cos(currAngle) >= halfOfChart ? 20 : -20,
                    extraSpace = x + 55 * Math.cos(currAngle) >= halfOfChart ? 4 : -4,
                    textWidth = ctx.measureText(chart.data.labels[index]).width,
                    spaceWord = x < halfOfChart ? 10 : 390,
                    loneToWord = x < halfOfChart ? spaceWord + (textWidth + 20) : spaceWord - (textWidth + 20)

                //draw line

                ctx.strokeStyle = color
                ctx.lineWidth = '1'
                ctx.beginPath()
                ctx.moveTo(x + 40 * Math.cos(currAngle), y + 40 * Math.sin(currAngle))
                ctx.lineTo(x + 55 * Math.cos(currAngle), y + 55 * Math.sin(currAngle))
                // ctx.lineTo(x + 55 * Math.cos(currAngle) + extraLine, y + 55 * Math.sin(currAngle))
                ctx.lineTo(loneToWord, y + 55 * Math.sin(currAngle))
                ctx.stroke()
                ctx.closePath()
                ctx.beginPath()
                ctx.arc(loneToWord + extraSpace, y + 55 * Math.sin(currAngle), 3, 0, 2 * Math.PI);
                ctx.stroke()
                ctx.font = '12px Mont'
                ctx.textBaseline = 'middle'
                ctx.textAlign = halfOfChart < x ? 'right' : 'left'
                ctx.fillText(chart.data.labels[index], spaceWord, y + 55 * Math.sin(currAngle))


                console.log(chart.data.labels[index], textWidth);
            })
        });
    }
}

new Chart(ctx,
    {
        type: 'doughnut',
        data: {
            labels: ['RED', 'BLUE', 'PINK', 'GREEN', 'PURPLE', 'ORANGE'],
            datasets: [
                {
                    data: [6, 8, 3, 5, 4, 2],
                    backgroundColor: ['Red', 'Blue', 'Pink', 'Green', 'Purple', 'Orange'],
                    borderWidth: 0,
                    cutout: '30%',
                },
            ],
        },

        options: {
            // responsive: false,
            layout: {
                padding: 50
            },
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
        },
        plugins: [
            doughnutLabelsLine
        ]
    }

);

