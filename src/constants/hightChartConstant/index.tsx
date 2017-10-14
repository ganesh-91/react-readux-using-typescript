const pieCharts = {
    chart: {
        height: "250px",
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: ""
    },
    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            },
            startAngle: 0,
            endAngle: 360,
            center: ["50%", "50%"],
            allowPointSelect: true,
            cursor: "pointer",
            showInLegend: true
        }
    },
    legend: {
        align: "left",
        verticalAlign: "top",
        layout: "vertical",
        x: 0,
        y: 0,
        itemMarginBottom: 10,
        symbolRadius: 3
    }
};

const HighChartsConstants = {
    pieCharts
};

export default HighChartsConstants;