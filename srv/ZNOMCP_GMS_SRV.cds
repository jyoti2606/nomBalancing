using ZNOMCP_GMS_SRV from './external/ZNOMCP_GMS_SRV.cds';

service ZNOMCP_GMS_SRVSampleService {
    @readonly
    entity ZGMS_nom as projection on ZNOMCP_GMS_SRV.ZGMS_nom
    {        key Gasday, key Vbeln, key Posnr, key Versn, Nomtk, Timestamp, Kunnr, Auart, Rank, Dcq, Uom1, Dnq, Uom2, Event, Adnq, Pdnq, Uom4, Znomtk, Zstat, Dtolp, Dtolq, ZpotentialSf, Src, ZdeliveryPoint, Remarks, Flag, Action, Srvparam1, Srvparam2, ZreceiptPoint, Path, CustGrp, SrvProfile     }    
;
}