import AREAS from "../constants/AREAS";


export function getDepositChildrens(depositCode=null){
    let deposits = AREAS.filter(area => area.ParentCode === depositCode && area.IsDeposit === true) || [];
    return deposits;
}

export function getAreasChildrens(depositCode){
    let areas = AREAS.filter(area => area.ParentCode === depositCode && area.IsDeposit === false) || [];
    return areas;
}

export function getDeposits(){
    let deposits = AREAS.filter(area => area.IsDeposit === true) || [];
    return deposits;
}

export function getLevel(depositCode){
    let exists = AREAS.find(area => area.IsDeposit === true && area.Code === depositCode );
    if (exists) {
        let level = 1;
        while(exists.ParentCode){
            exists = AREAS.find(area => area.IsDeposit === true && area.Code === exists.ParentCode );
            level = level + 1;
        }
        return level;
    }
    else return 0;
}
