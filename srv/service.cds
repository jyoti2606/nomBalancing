using ZNOMCP_GMS_SRV from './external/ZNOMCP_GMS_SRV.cds';
service myservice{
    entity ZGMS_nom as projection on ZNOMCP_GMS_SRV.ZGMS_nom

}