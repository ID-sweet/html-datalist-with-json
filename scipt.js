
        var dataList = document.getElementById('json-datalist');
        var input = document.getElementById('ajax');
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (response) {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    var jsonOptions = JSON.parse(request.responseText);

                    jsonOptions.forEach(function (item) {
                        var option = document.createElement('option');
                        option.value = item;
                        dataList.appendChild(option);
                    });

                    input.placeholder = "e.g. datalist";
                } else {
                    input.placeholder = "Couldn't load datalist options :(";
                }
            }
        };
        input.placeholder = "Loading options...";
        request.open('GET', 'https://example.com/example.json', true);
        request.send();
