sap.ui.define([
    //"sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast",
    //"sap/ui/model/json/JSONModel"
    "dtt/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
/** 
 * @param(typeof dtt.SAPUI5.model.Models) Models
 * @param(typeof sap.ui.model.resource.ResourceModel) ResourceModel
 * @param(typeof sap.ui.core.UIComponent) UIComponent
 */
    function(Models, ResourceModel, UIComponent){    
        return UIComponent.extend("dtt.SAPUI5.Component", {

            metadata:{
                    manifest:"json"
                
            },   

            init:function(){
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());

                var i18nModel=new ResourceModel({bundleName: "dtt.SAPUI5.i18n.i18n"});
                this.setModel(i18nModel, "i18n"); 
            }
        })

    })

