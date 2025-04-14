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
    const yPredict = X.map(f => {
        const output = model.predict(f);
        if (output.length === 1) {
          // Binaria: redondear
          return Math.round(output[0]);
        } else {
          // Multiclase: elegir la clase con mayor probabilidad
          return output.indexOf(Math.max(...output));
        }
      });

    const myAccuracyScore = await accuracyScore();
    const accuracy = myAccuracyScore(y, yPredict);

    const log = document.getElementById('log');
    log.innerHTML = '<br><br>OR:<br>X = '+JSON.stringify(X, null, 2);
    log.innerHTML += ' y = '+JSON.stringify(y, null, 2);
    log.innerHTML += ' yPredict = '+ JSON.stringify(yPredict, null, 2);
    log.innerHTML += '<br><br>AccuracyScore: '+accuracy;
}


fit_predict();
