﻿$(document).ready(function () {
    $('.delete-button').on('click', function () {
        var Id = $(this).data('id');
        var deleteButton = $(this);

        $.ajax({
            url: '/Vehicle/VehiclYakıtDelete/' + Id,
            type: 'POST',
            success: function (data) {
                if (data.success) {
                    
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı!',
                        text: 'Silme işlemi başarıyla gerçekleştirildi.'
                    });             
                    deleteButton.closest('tr').remove();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hata!',
                        text: data.error
                    });
                }
            },
            error: function () {
            
                console.error('Silme işlemi sırasında bir hata oluştu.');
            }
        });
    });
})
function openUpdateModal(id, aracYakıtTuru) {
    $('#updateId').val(id);
    $('#updateAracYakıtTuru').val(aracYakıtTuru);
    $('#updateModal').modal('show');
}
function updateVehicle() {

    var formData = $('#updateForm').serialize();
    $.ajax({
        url: '/Vehicle/VehiclYakıtUpdate',
        type: 'POST',
        data: formData,
        success: function (data) {
            if (data.success) {
                location.reload();
            } else {
                alert('Güncelleme işlemi başarısız!');
            }
        },
        error: function () {

            console.error('Güncelleme işlemi sırasında bir hata oluştu.');
        }
    });


    return false;
}

