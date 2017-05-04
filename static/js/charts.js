// google.charts.load("visualization", "1", {packages:["corechart"]});
google.load("visualization", "1", {packages:["corechart"]});


//for rest, walk, fast_walk data
var data, options, chart;

//for Energy(E) data
var data2, options2, chart2;

var i = 0;
//var rest=0, walk=0, fast_walk=0;

/* initialize chart */
function drawChart(data, options) {
    var chart = new google.visualization.LineChart(document.getElementById('data-container'));
    chart.draw(data, options);
    return(chart);
}

function drawChart2(data, options) {
    var chart = new google.visualization.LineChart(document.getElementById('data-container2'));
    chart.draw(data, options);
    return(chart);
}


/*
function updateValue() {
    rest = Math.round((Math.random() * 1000));
    walk = Math.round((Math.random() * 1000));
    fast_walk = Math.round((Math.random() * 1000));

    updateChart(rest, walk, fast_walk);
}
*/

/* update the chart */
//function updateChart(data, chart, options) {
//function updateChart(a, b, c) {
function updateChart(rest, walk, fast_walk) {
    i = (i + 1);
    
    /*
    rest = data['rest'];
    walk = data['walk'];
    fast_walk = data['fast_walk'];
    */

    /*
    data.addRow([
        ""+i, // change the number to a string
        Math.round((Math.random() * 1000)), //random value 
        Math.round((Math.random() * 1000)), //random value
        Math.round((Math.random() * 1000)) //random value
    ]);
    */

    data.addRow([
        ""+i,
        rest,
        walk,
        fast_walk
    ]);

    chart.draw(data, options);
    
    //setTimeout(function(){updateChart(data, chart, options)}, 5000);
}

function updateChart2(e) {
    data2.addRow([
        ""+i,
        e
    ]);

    chart2.draw(data2, options2);
}

$(function() {
   // set variables
    /*
    var data = google.visualization.arrayToDataTable([
        ['Time', 'Rest', 'Walk', 'Fast Walk'],
        ['0', 0, 0, 0],
    ]);
    */
    data = google.visualization.arrayToDataTable([
        ['Time', 'Rest', 'Walk', 'Fast Walk'],
        ['0', 0, 0, 0],
    ]);

    data2 = google.visualization.arrayToDataTable([
        ['Time', 'E'],
        ['0', 0],
    ]);
    
    /*
    var options = {
        title: 'Live sensor data',
        "curveType": "function",
    };
    */
    options = {
        title: 'Live sensor data',
        "curveType": "function",
    };

    options2 = {
        title: 'Energy data',
        "curveType": "function",
    };
    
    //var chart = drawChart(data, options);
    chart = drawChart(data, options);
    chart2 = drawChart2(data2, options2);
    //updateChart(data, chart, options);
});

/*
$(function() {
   // set variables
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
    ]);
    
    var options = {
        title: 'Company Performance',
        "curveType": "function",
    };
    
    var chart = drawChart(data, options);
    
    updateChart(data, chart, options);
});
*/

//document.getElementById("ResetButton").onclick = function () { alert('hello!'); };

function reset(){
    data = google.visualization.arrayToDataTable([
        ['Time', 'Rest', 'Walk', 'Fast Walk'],
        ['0', 0, 0, 0],
    ]);

    options = {
        title: 'Live sensor data',
        "curveType": "function",
    };

    options2 = {
        title: 'Energy data',
        "curveType": "function",
    };

    data2 = google.visualization.arrayToDataTable([
        ['Time', 'E'],
        ['0', 0],
    ]);

    i = 0;
    chart = drawChart(data, options);
    chart2 = drawChart2(data2, options2);
}
