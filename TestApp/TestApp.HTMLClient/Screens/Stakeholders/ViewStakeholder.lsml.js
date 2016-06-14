/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewStakeholder.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Tbl_Stkhld_Datum.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Tbl_Stkhld_Datum." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

