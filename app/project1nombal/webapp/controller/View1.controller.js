sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/comp/smartvariants/PersonalizableInfo',
    'sap/ui/model/json/JSONModel',
    'sap/m/Label'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,DateFormat,MessageBox,Filter,FilterOperator,JSONModel,PersonalizableInfo,Label) {
        "use strict";
        var GasDate;
        return Controller.extend("project1nombal.controller.View1", {
            onInit: function () {
             
        
             
              
        
            
             
              this.oFilterBar = this.getView().byId("filterbar");
              this.oTable = this.getView().byId("table");
        
             
            
        
             
            
                // debugger;

                //  const url = "/odata/v4/myservice/ZGMS_nom"; 
                //  fetch(url) 
                //  .then(response => { 
                //      if (!response.ok) { 
                //          throw new Error('Network response was not ok'); 
                //     } 
                //      return response.json(); 
                //  }) 
                //  .then(odata => { 
                //       console.log("view 1 data is"+JSON.stringify(odata));
                //      this.Gas_data = odata.value; 
                //  }) 
                //  .catch(error => { 
                //      console.error('There was a problem with the fetch operation:', error); 
                //  }); 
            },
            onSearch: function () {
              var aTableFilters = this.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
                var oControl = oFilterGroupItem.getControl(),
                  aSelectedKeys = oControl.getSelectedKeys(),
                  aFilters = aSelectedKeys.map(function (sSelectedKey) {
                    return new Filter({
                      path: oFilterGroupItem.getName(),
                      operator: FilterOperator.Contains,
                      value1: sSelectedKey
                    });
                  });
        
                if (aSelectedKeys.length > 0) {
                  aResult.push(new Filter({
                    filters: aFilters,
                    and: false
                  }));
                }
        
                return aResult;
              }, []);
        
              this.oTable.getBinding("items").filter(aTableFilters);
              this.oTable.setShowOverlay(false);
            },
        
            onFilterChange: function () {
              this._updateLabelsAndTable();
            },
            onAfterVariantLoad: function () {
              this._updateLabelsAndTable();
            },
        
           
           
        
            _updateLabelsAndTable: function () {
             
              this.oTable.setShowOverlay(true);
            },
          
        

            onSearch1: function (oEvent) {
             
              
                var oOrigin = this.getView().byId("datePicker").getValue();
                //  var oOrigin1 = this.getView().byId("loc").getSelectedItem().getText();
                //   var oOrigin2 = this.getView().byId("input3").getValue();
                //   var startDate=Date.parse(oOrigin2)
                console.log(oOrigin);
                //  console.log("hello");
                //  console.log(typeof(oOrigin2));
                //  var oOrigin3 = this.getView().byId("input4").getValue();
                 //var oSearch = oEvent.getParameter("query");
                var oFilter = new Filter(
                  "Gasday",
                  FilterOperator.Contains,
                  oOrigin
                );
        
               
        
                var oList = this.getView().byId("_IDGenTable1");
        
                  
        
                oList.getBinding("items").filter(oFilter, FilterType.Application);
        
                
              },
            onComboBoxSelectionChange: function(oEvent) {   
                                var oSelectedItem = oEvent.getParameter("selectedItem");     
                     if (oSelectedItem) { 
                                    var sSelectedDate = oSelectedItem.getText();   
                                    console.log("Selected Date: " + sSelectedDate);
                                }     
                      },             
        
    
           

            

            onSselectionChange:function(oEvent){
                this.GasDate = oEvent.oSource.mProperties.value;
           var formattedGasDay = this._dateFormatter(gasDay);
        //    console.log("formatted date is"+formattedGasDay);
        
            // console.log("gas day"+gasDay);
            //  console.log("gas data is"+JSON.stringify(this.Gas_data));
            var gasData = this.Gas_data.filter(function(item){
                // console.log("item data"+JSON.stringify(item.Gasday));
               return item.Gasday === formattedGasDay
            })
            console.log("filter data is"+JSON.stringify(gasData));
            var oModel = new sap.ui.model.json.JSONModel()
            oModel.setData(gasData)
            this.getOwnerComponent().setModel(oModel, "filterData");
            console.log("Model set in View1:", oModel.getData());
            },

            _dateFormatter : function(dateString) {
                // console.log("Input Date String:", dateString);

                var originalDateFormat = DateFormat.getDateInstance({ pattern: "MM-dd-yy" });
                var targetDateFormat = DateFormat.getDateInstance({ pattern: "yyyy-MM-dd" });
              
                var date = originalDateFormat.parse(dateString);
                // console.log("Parsed Date:", date);
              
                var formattedDate = targetDateFormat.format(date);
                console.log("Formatted Date:", formattedDate);
              
                return formattedDate;
              }
        });
    });
