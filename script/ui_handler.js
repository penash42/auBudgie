function showModal(id)
{
    $('#'+ id).modal('show');
}

function hideModal(id)
{
    $('#' + id).modal('hide');
}

$('#createNewBudgetLink').click(function () { showModal("createNewBudgetModal"); });
$('#openBudgetLink').click(function () { showModal("openBudgetModal"); });
$('#saveChangesLink').click(function () { save(); });
