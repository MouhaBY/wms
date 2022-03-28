
const AREAS = [
    {Code:"E01", Name:"Entreprise 01", ParentCode:null, IsDeposit:true},
    {Code:"E02", Name:"Entreprise 02", ParentCode:null, IsDeposit:true},
    {Code:"D01", Name:"Dépot 01", ParentCode:"E01", IsDeposit:true},
    {Code:"D03", Name:"Dépot 03", ParentCode:"E01", IsDeposit:true},
    {Code:"D03-EXP", Name:"Expédition", ParentCode:"D03", IsDeposit:true},
    {Code:"QLT", Name:"Contrôle qualité", ParentCode:"D03-EXP", IsDeposit:true},
    {Code:"ASS-QLT", Name:"Assistance qualité", ParentCode:"QLT", IsDeposit:true},
    {Code:"D02-EXP", Name:"Expédition", ParentCode:"D02", IsDeposit:true},
    {Code:"QLT-02", Name:"Contrôle qualité 02", ParentCode:"D02-EXP", IsDeposit:true},
    {Code:"ASS-QLT-02", Name:"Assistance qualité 02", ParentCode:"QLT-02", IsDeposit:true},
    {Code:"REC", Name:"Réception", ParentCode:"D03", IsDeposit:true},
    {Code:"D02", Name:"Dépot 02", ParentCode:"E02", IsDeposit:true},
    {Code:"A001", Name:"Emp. A001", ParentCode:"D01", IsDeposit:false},
];

export function getDepositChildrens(depositCode=null){
    let deposits = AREAS.filter(area => area.ParentCode === depositCode && area.IsDeposit === true) || [];
    return deposits;
}