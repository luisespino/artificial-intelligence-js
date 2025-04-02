async function fit_predict_draw() {

    const { PolynomialRegression, joinArrays } = await import('https://cdn.jsdelivr.net/gh/mlearnjs/mlearnjs.github.io@main/dist/mlearn.mjs');

    const myPolynomialRegression = await PolynomialRegression(3); 
    const model = new myPolynomialRegression(3);

    const X = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const y = [1, 4, 1, 5, 3, 7, 2, 7, 4, 9];

    model.fit(X, y);

    yPredict = model.predict(X)

    const myjoinArrays = await joinArrays();
    const arr = myjoinArrays('x', X, 'y', y, 'yPredict', yPredict);

    const log = document.getElementById('log');
    const yPred = yPredict.map(num => parseFloat(num.toFixed(2)));
    log.innerHTML = 'X: '+X+'<br>y: '+y+'<br>yPredict: '+yPred;

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);    
    function drawChart() {
        var data = google.visualization.arrayToDataTable(arr);
        var options = {
            seriesType : 'scatter',
            series: {1: {curveType: 'function'}}
        };  
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);         
    }
}

fit_predict_draw();