$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn_cancel').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endNewImg = $('#end-new-img').val()
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${endNewImg}"/>`).appendTo(newItem)
        $(`
            <div class="overlay-img-link">
                <a href="${endNewImg}" target="_blank" title="See full size image">
                    See full size image
                </a>
            </div>
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#end-new-img').val('')
    })
})