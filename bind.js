var OutputName=function () {
    throw "stub";
}

const UsageInSchool="inSchool"
const UsageUnify="unify"

var DeclareEntity=function (usage,v) {
    throw "stub";
}

function Field(visibleName,dbName,type,primaryKey,index,toKey){
    return {
        "VisibleName":visibleName,
        "DBName":dbName,
        "Type": type,
        "PrimaryKey":primaryKey,
        "Index":index,
        "ToKey":toKey,
    }
}

const TypeString="string"
const TypeInt="int"

function NewEntity(name,tableName,fields,
                   toItems, toKey,toUnify,
                   whereForLookup,whereForUnique,whereForContents,
                   allowMultipleConfirm){
    return {
        Name:name,
        TableName:tableName,
        Fields:fields,
        ToItems:toItems,
        ToKey:toKey,
        WhereForLookup:whereForLookup,
        WhereForUnique:whereForUnique,
        WhereForContents:whereForContents,
        ToUnify:toUnify,
        AllowMultipleConfirm:allowMultipleConfirm,
    }
}

function NewWhere(query,values){
    if(!Array.isArray(values)){
        values=[values]
    }
    return {Query: query,Values:values}
}

function SaveToDB(entityName,x){
    return "stub";
}