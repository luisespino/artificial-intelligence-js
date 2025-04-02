const { LinearRegression, joinArrays } = await import('https://cdn.jsdelivr.net/gh/mlearnjs/mlearnjs.github.io@main/dist/mlearn.mjs?v=' + new Date().getTime());

const X = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const y = [1, 4, 1, 5, 3, 7, 2, 7, 4, 9];

async function fit_predict_draw() {
    const myLinearRegression = await LinearRegression(); 
    const model = new myLinearRegression();
    
    model.fit(X, y);

    yPredict = model.predict(X)

    const myjoinArrays = await joinArrays();
    const arr = myjoinArrays('x', X, 'y', y, 'yPredict', yPredict);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);    
    function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);
        var options = {
            seriesType : 'scatter',
            series: {1: {type: 'line'}}
        };  
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);         
    }
}

fit_predict_draw();
