/* ==========================================================================
   Author's custom javascript
   ========================================================================== */
window.alert = function (message) {
    $('<div />').text(message).dialog({
        modal: true,
        title: 'Message',
        buttons: {
            'OK': function () {
                $(this).dialog('close');
            }
        },
        close: function () {
            $(this).dialog('destroy').remove();
        }
    });
};