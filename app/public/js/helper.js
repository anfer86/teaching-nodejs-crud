createTableFilter = function(inputSearchId, tableId){
	// Evento onKeyUp (Ao apertar cada tecla)
	$("#inputSearch").keyup( function() {
		// Transforma a query em lowercase
    	var query = $(this).val().toLowerCase();
		// Cria das rows que serão filtradas
		var strIdRow = "#" + tableId + "tbody tr";
		// Vai filtrar as rows da tabela
		$(strIdRow).filter(function() {			
			// A função toggle permite ativar ou desativar as linhas da tabela
      		$(this).toggle($(this).text().toLowerCase().indexOf(query) > -1)
    	});

  	});

}

makeTableBody = function(tableId, jsonTableData, operations = null){
	// Obter a referência do tbody da tabela
	var strTableBody = '#' + tableId + ' tbody';
	var tableBody = $(strTableBody);	
	// Para cada elemento do json cria uma linha da tabela
	// Após isso realiza o append no tbody da tabela
	$.each(jsonTableData, function(i, item) {
		// Cria linha da tabela
		var row = $("<tr/>");
		// Colocar o valor de cada atributo em uma célula
		$.each(item, function(key, value){
				row.append( $('<td>').text(value) );
			})
		// Colocar o valor de cada atributo em uma célula		
		$.each(operations.names, function(key, value){
				var link = $('<a>').attr('href', operations.model + "/" + value.toLowerCase() + "/" + item[operations.field] )
				row.append( $('<td>').html( link.text(key) ) );
			})
		// Adiciona a linha da tabela ao tableBody
		tableBody.append(row);	  
	});
}

makeTableHead = function(tableId, jsonTableHeader, operations = null){
	// Obter a referência do thead da tabela
	var strTableHead = '#' + tableId + ' thead';	
	var thead = $(strTableHead);
	// Cria linha da tabela	
	var row = $("<tr/>");
	// Coloca o nome das colunas dos atributos
	$.each(jsonTableHeader, function(key, value){
			row.append( $('<th>').text(value) );
		})
	// Coloca o nome das colunas das operações
	$.each(operations.names, function(key, value){
			row.append( $('<th>').text(value) );
		})
	// Adiciona a linha da tabela ao tableBody
	thead.append(row);
}

makeTableModel = function(method, url, tableId){

    $.ajax( { 
    	
    	url : url, 
    	type : method

    }).done(function( json ) {

    	makeTableHead(tableId, json.header, json.operations);
    	makeTableBody(tableId, json.data, json.operations);

    });

}


