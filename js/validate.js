 $(function() {
/** Jquery Validation FormILC */
    $("#formILC").validate ({
    rules:{
		'nome':{
			required: true,
			minlength: 3
                 },
                 'cognome': {
                        required: true,
			minlength: 3
                 },
                 'telefono': {
                        required: false,
                        digits: true
                 },
		'email':{
			required: true,
			email: true
			},
      'referente':{
  			required: true
  			},
        'privacy':{
    			required: true
    			},
                 'messaggio':{
			required: true,
			minlength: 10
                 }
		},
        messages:{
          'privacy':{
            required: "&nbsp;&nbsp;<span style='color:red;'>  Devi accettare le condizioni di privacy.</span>",
            },
          'referente':{
            required: "&nbsp;&nbsp; <span style='color:red;'> Il campo è obbligatorio!</span>",
            minlength: "&nbsp; &nbsp; <span style='color:red;'> Insersci un nome di almeno 3 lettere!</span>"
            },
    'nome':{
			required: "&nbsp;&nbsp;  <span style='color:red;'> Il campo nome è obbligatorio!</span>",
			minlength: "&nbsp; &nbsp; <span style='color:red;'> Insersci un nome di almeno 3 lettere!</span>"
			},
  		'cognome':{
			required: "&nbsp; &nbsp; <span style='color:red;'> Il campo cognome è obbligatorio!</span>",
			minlength: "&nbsp; &nbsp; <span style='color:red;'> Insersci un nome di almeno 3 lettere!</span>"
			},
               	'telefono':{
			required: "&nbsp; &nbsp; <span style='color:red;'> Il campo telefono è obbligatorio!</span>",
			digits: "  &nbsp; &nbsp; <span style='color:red;'> Insersci solo numeri</span>"
			},
               'email':{
			required: " &nbsp; &nbsp;  <span style='color:red;'> Il campo email è obbligatorio!</span>",
			email: " &nbsp; &nbsp;  <span style='color:red;'> Inserisci un valido indirizzo email!</span>"
			},
               'messaggio':{
			required: " &nbsp; &nbsp;  <span style='color:red;'> Il campo messaggio è obbligatorio!</span>",
			minlength: "  &nbsp; &nbsp; <span style='color:red;'> Insersci un messaggio di almeno 10 lettere!</span>"
			}
		},
                 submitHandler: function(form) {
                                $.ajax({
                                    type: 'POST',
                                    url: '../ajax.php',
                                    dataType: 'html',
                                    data: {
                                        send: 'contatti',
                                        nome: $('#nome').val(),
                                        cognome: $('#cognome').val(),
                                        telefono: $('#telefono').val(),
                                        email: $('#email').val(),
                                      	referente: $('#referente option:selected').text(),
										oggetto: $('#oggetto').val(),
                                        messaggio: $('#messaggio').val()
                                    },
                                    beforeSend: function() {
                                        $('#submit').fadeOut();
                                        $('img#loading').show();
                                    },
                                    success: function(data) {
                                        $('#result').html(data);
                                        $('img#loading').hide();
                                            setTimeout(function() {
                                            document.location.href="http://datascience.di.uniba.it/index.html";
                                            }, 5000);
                                        }
                                }); //Ajax
                 } //submihandler
    });
    });
