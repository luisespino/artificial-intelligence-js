

(async () => {
    const { 
        LinearRegression, 
        trainTestSplit, 
        joinArrays
    } = await import("https://mlearnjs.github.io/mlearnjs/dist/mlearn.mjs");
      
    var xTrain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var yTrain = [1, 4, 1, 5, 3, 7, 2, 7, 4, 9];
  
    const model = new LinearRegression();
    model.fit(xTrain, yTrain);
    yPredict = model.predict(xTrain);

    document.getElementById("log").innerHTML+='<br>X Train:   '+xTrain+'<br>Y Train:   '+yTrain+'<br>Y Predict: '+yPredict;
    var a = joinArrays('x',xTrain,'yTrain',yTrain,'yPredict',yPredict);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var data = google.visualization.arrayToDataTable(a);
        var options = {
            seriesType : 'scatter',
            series: {1: {type: 'line'}}
        };  
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);         
    }    

  })();