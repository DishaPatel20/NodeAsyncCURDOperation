
const fs = require('fs');
//1. Create a folder named it Disha
fs.mkdir('Disha', (err)=>{
	console.log('Folder Created');
})

// 2. Create a file in it named bio.txt & data into it.
fs.writeFile('Disha/bio.txt', 'Myself Disha Patel. ', (err) => {
	console.log('File created nd data is also their into it');
})

//3. Add more data into the file at the end of the existing data
fs.appendFile('Disha/bio.txt', ' I am Studing in RK University ', (err) =>{
	console.log('More data is added');
});

//4. Read the data without getting the buffer data at first
// with buffer data:-----
fs.readFile('Disha/bio.txt', (err,data)=>{
	console.log(data);
})
// without bufferdata:-
// file encoding
fs.readFile('Disha/bio.txt', 'utf8', (err,data)=>{
	console.log(data);
})

//5. Rename the file name to myBio.txt
fs.rename('Disha/bio.txt', 'Disha/mybio.txt',(err)=>{
	console.log('Renamed The File');
});

//6. Now delete the file nd the folder
// delete file :---
fs.unlink('Disha/mybio.txt',(err)=>{
	console.log('File Deleted');
});

// delete folder :---
fs.rmdir('Disha', (err)=>{
	console.log('Folder Deleted');
})