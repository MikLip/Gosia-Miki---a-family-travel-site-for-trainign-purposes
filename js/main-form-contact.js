function mainFormContact() {
    $('#mainForm').on('submit', function(e) {
        e.preventDefault();
        const $form = $(this);
        const $inputName = $('#formName');
        const $inputEmail = $('#formEmail');
        const $inputMessage = $('#formMessage');
        const $btnSubmit = $form.find('button:submit');
        const inputs = [$inputName, $inputEmail, $inputMessage];

        let formError = false;
        inputs.forEach(($el) => {
            if (!$el.get(0).checkValidity()) {
                formError = true;
                $el.addClass('error');
            } else {
                $el.removeClass('error');
            }
        });

        if (!formError) {
            console.log('WYSYLAM FORMULARZ')

            $btnSubmit.addClass('loading');
            $btnSubmit.prop('disabled', true);
            $.ajax({
                url : $form.attr('action'),
                method : $form.attr('method'),
                data : {
                    formName : $('#formName').val(),
                    formEmail : $('#formEmail').val(),
                    formMessage : $('#formMessage').val()
                }
            }).done((ret) => {
                $form.find('.main-form-message').remove();
                const $message = $(`<div class="main-form-message">Wiadomość wysłana pozytywnie</div>`);
                $btnSubmit.after($message);
            }).always((ret) => {
                $btnSubmit.removeClass('loading');
                 $btnSubmit.prop('disabled', false);
            }).fail((ret) => {
                $form.find('.main-form-message').remove();
                const $message = $(`<div class="main-form-message message-send-error">Wiadomość nie została wysłana</div>`);
                $btnSubmit.after($message);
            })
            
        }                
    });
}

export { mainFormContact };