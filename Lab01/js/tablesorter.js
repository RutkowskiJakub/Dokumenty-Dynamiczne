$(function() {

    $("table").tablesorter({ theme : 'blue', sortList: [[3,1],[0,0]] });

    // Add two new rows using the "addRows" method
    // the "update" method doesn't work here because not all
    // rows are present in the table when the pager is applied
    $('button').click(function() {
        // add two rows
        var row = '<tr><td>Frank</td><td>Smith</td><td>53</td><td>$39.95</td><td>22%</td><td>Mar 22, 2011 9:33 AM</td></tr>' +
            '<tr><td>Inigo</td><td>Montoya</td><td>34</td><td>$19.99</td><td>15%</td><td>Sep 25, 1987 12:00PM</td></tr>',
            $row = $(row),
            // resort table using the current sort; set to false to prevent resort, otherwise
            // any other value in resort will automatically trigger the table resort.
            resort = true;
        $('table')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);
        return false;
    });

});