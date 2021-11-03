
const DataSourceUnify="unifyDataSource"

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