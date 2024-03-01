const jsonfile=require('jsonfile');
const moment=require('moment');
const simpleGit=require('simple-git');
// const random=require('random');

const FILE_PATH='./data.json';

    const DATE=moment().subtract(1,'d').format();
    const  data={
        date:Date+1
    };
    jsonfile.writeFile(FILE_PATH,data, () =>{
        simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push();

    });





