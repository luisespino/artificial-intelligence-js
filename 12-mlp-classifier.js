async function fit_predict() {
    const { MLPClassifier, LabelEncoder, accuracyScore } = await import('https://luisespino.github.io/mlearnjs/mlearn.mjs');

    const X = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ];
    
    let y = [0, 1, 1, 1];

    const myMLPClassifier = await MLPClassifier(); 
    const model = new myMLPClassifier(2, 4, 1);

    
    model.fit(X, y);
    const yPredict = model.predict(X);

    const myAccuracyScore = await accuracyScore();
    const accuracy = myAccuracyScore(y, yPredict);

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>OR:<br>X = '+JSON.stringify(X, null, 2);
    log.innerHTML += ' y = '+JSON.stringify(y, null, 2);
    log.innerHTML += ' yPredict = '+ JSON.stringify(yPredict, null, 2);
    log.innerHTML += '<br><br>AccuracyScore: '+accuracy;
}

function showTable(table) {
    let container = document.getElementById('table-container');

    // Crear el elemento de la tabla
    let tableElement = document.createElement('table');

    // Crear la cabecera de la tabla
    let header = tableElement.createTHead();
    let headerRow = header.insertRow();
    let headers = ['Outlook', 'Temp', 'Humidity', 'Windy', 'Label'];
    headers.forEach(headerText => {
        let cell = headerRow.insertCell();
        cell.textContent = headerText;
    });

    // Crear el cuerpo de la tabla
    let body = tableElement.createTBody();
    table.forEach(rowData => {
        let row = body.insertRow();
        rowData.forEach(cellData => {
            let cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    // Insertar la tabla en el contenedor
    container.appendChild(tableElement);
}

fit_predict();
