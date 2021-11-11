
const columns = ['id', 'name','department','phone','salary','age'];
const data = [
    {id: '1', name:'Asha', department:'IT', phone:'9082618639', salary:'25000', age:'25'},
    {id: '2', name:'Hima', department:'Business Development', phone:'8999618639', salary:'35000', age:'27'},
    {id: '3', name:'Swetha', department:'Sales', phone:'9142614252', salary:'60000', age:'28'},
    {id: '4', name:'Arun', department:'Development', phone:'9132618645', salary:'50000', age:'35'},
    {id: '5', name:'Varshini', department:'Test Team', phone:'9003457639', salary:'25000', age:'37'},
    {id: '6', name:'Pooja', department:'Test Team', phone:'8856615678', salary:'75000', age:'38'},
    {id: '7', name:'Rohit', department:'Customer Support', phone:'7123612762', salary:'25000', age:'45'},
    {id: '8', name:'Shreya', department:'Research', phone:'7882618639', salary:'33000', age:'24'},
    {id: '9', name:'Jeni', department:'Business Development', phone:'9682690011', salary:'45000', age:'26'},
    {id: '10', name:'Anusha', department:'Sales', phone:'9888126351', salary:'28000', age:'28'},
    {id: '11', name:'Rajiv', department:'IT', phone:'9017236311', salary:'37000', age:'26'},
    {id: '12', name:'Sanjana', department:'Business Development', phone:'9273755341', salary:'115000', age:'35'},
    {id: '13', name:'Varsha', department:'Development', phone:'7882687413', salary:'44000', age:'32'},
    {id: '14', name:'Lekha', department:'Customer Support', phone:'9653357178', salary:'58000', age:'26'},
    {id: '15', name:'John', department:'Customer Support', phone:'9283861187', salary:'55000', age:'33'},
    {id: '16', name:'Vinay', department:'Sales', phone:'7921839834', salary:'58000', age:'28'},
    {id: '17', name:'Alice', department:'Research', phone:'9827354515', salary:'45000', age:'38'},
    {id: '18', name:'Emma', department:'Business Development', phone:'8763435412', salary:'73000', age:'25'},
    {id: '19', name:'sara', department:'Business Development', phone:'9712745411', salary:'88000', age:'43'},
    {id: '20', name:'Ron', department:'Research', phone:'7926365111', salary:'65000', age:'45'},
    {id: '21', name:'Jack', department:'Research', phone:'9764351411', salary:'33000', age:'44'},
    {id: '22', name:'James', department:'Sales', phone:'7883261721', salary:'22000', age:'34'},
    {id: '23', name:'Ray', department:'Development', phone:'9786126531', salary:'44000', age:'23'},
    {id: '24', name:'Rony', department:'Development', phone:'9832175361', salary:'124000', age:'25'},
    {id: '25', name:'Alex', department:'Sales', phone:'8635164312', salary:'33000', age:'35'},
    {id: '26', name:'Abi', department:'Research', phone:'9871238614', salary:'66000', age:'33'},
    {id: '27', name:'Rony', department:'IT', phone:'9912838756', salary:'77000', age:'27'},
    {id: '28', name:'Ben', department:'IT', phone:'8647534134', salary:'25000', age:'28'},
    {id: '29', name:'David', department:'IT', phone:'9054432112', salary:'35000', age:'45'},
    {id: '30', name:'Kiran', department:'Sales', phone:'7654543233', salary:'32000', age:'23'},
    {id: '31', name:'Kiran', department:'IT', phone:'9837216631', salary:'55000', age:'29'},
    {id: '32', name:'Mike', department:'Sales', phone:'8631751121', salary:'34000', age:'45'},
    {id: '33', name:'Anu', department:'Customer Support', phone:'9091829831', salary:'22000', age:'25'},
    {id: '34', name:'Naveen', department:'Customer Support', phone:'9910928748', salary:'27000', age:'22'},
    {id: '35', name:'Soumya', department:'IT', phone:'8731564513', salary:'55000', age:'42'},
    
    
];
let filteredData = [];
let table=document.getElementById("employeeTable");

UpdateDataToTable(data);

function UpdateDataToTable(inputData) {
    ClearRows();
    AddHeaders(); 
    for(var i=0; i< inputData.length ;i++){
        let row=table.insertRow();
        for (var j=0; j< columns.length ;j++) {
            let cell=row.insertCell();
            cell.innerHTML = inputData[i][columns[j]];
        }
    } 

}
   
function search(key){
    filteredData = [];
    const keyL = key.toLowerCase();
    for(var i=0; i < data.length; i++){
        for (let j = 0; j < columns.length; j++) {
            if (data[i][columns[j]].toLowerCase().includes(keyL)) {
                filteredData.push(data[i]); //Entire row which contains the key is pushed
                break; // break and continue
            }
        }
    }
    UpdateDataToTable(filteredData);
}

function ClearRows() {
    while(table?.rows?.length > 0) {
        table.deleteRow(0);
    }
}

function AddHeaders() {
    let row=table.insertRow();
    for (var j=0; j< columns.length ;j++) {
        let cell=row.insertCell();
        cell.innerHTML = columns[j];
    }
}







// Functions
// 1. Add Headers
// 2. Adding Data - function will take filtereddata
// 3. On Search - get search term, filters based on search term, assigns it to 'filteredData', put back in html
