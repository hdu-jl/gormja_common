var OutputName=function () {
    throw "stub";
}

const UsageInSchool="inSchool"
const UsageUnify="unify"

const DataSourceUnify="unifyDataSource"

var DeclareEntity=function (usage,dataSourceName,v) {
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
const TypeBlob="blob"

function NewEntity(name,tableName,fields,
                   toItems, toKey,toUnify,
                   toHashTableKey,toHashTableValue,
                   toChainKey,
                   whereForLookup,whereForUnique,whereForContents,
                   allowUserSave,
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
        AllowUserSave:allowUserSave,
        AllowMultipleConfirm:allowMultipleConfirm,
        ToHashTableKey:toHashTableKey,
        ToHashTableValue:toHashTableValue,
        ToChainKey:toChainKey,
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

function NewDataSource(dataSourceName,dataSourceType,dsn){
    return {
        Name:dataSourceName,
        Type:dataSourceType,
        DSN:dsn,
    }
}

var DeclareDataSource=function (usage,v){
    throw "stub";
}