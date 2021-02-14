var searchValue = '';

$(document).ready(function(){

});

$(document).ready(function() {

  $('#search').keydown(function(){
    searchValue = $(this).val();
    $(this).css("background-color", "yellow");
    $("#some_text").text(searchValue);
  });

    $('#example').DataTable({
        ajax: 'data.txt',
        search: {
          search: "Tokyo"
        },
        columns: [
            {
                data: 'name'
            },
            {
                data: 'position'
            },
            {
                className: 'f32', // used by world-flags-sprite library
                data: 'office',
                render: function(data, type) {
                    if (type === 'display') {
                        var country = '';

                        switch (data) {
                            case 'Argentina':
                                country = 'ar';
                                break;
                            case 'Edinburgh':
                                country = '_Scotland';
                                break;
                            case 'London':
                                country = '_England';
                                break;
                            case 'New York':
                            case 'San Francisco':
                                country = 'us';
                                break;
                            case 'Sydney':
                                country = 'au';
                                break;
                            case 'Tokyo':
                                country = 'jp';
                                break;
                        }

                        return '<span class="flag ' + country + '"></span> ' + data;
                    }

                    return data;
                }
            },
            {
                data: 'extn',
                render: function(data, type, row, meta) {
                    return type === 'display' ?
                        '<progress value="' + data + '" max="9999"></progress>' :
                        data;
                }
            },
            {
                data: "start_date"
            },
            {
                data: "salary",
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            }
        ]
    });
});
