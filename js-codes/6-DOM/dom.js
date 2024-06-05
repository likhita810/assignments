// appending text area and a button from js to html document

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function() {
    const text = document.querySelector('textarea').value;
    //  selecting text area within the document and assigning it to text var. .value is used to get only text instead of entire element.
    
    const rows = text.split('\n');
    // splitting where a new line comes.

    for (const [i,row] of rows.entries()) {
        const [first,second = 'demo'] = row.toLowerCase().trim().split('_');
        // splits at _ and trim=> removes spaces from noth left and right side. and changes the words to lower case.

        // if no button is clicked and no input is given, it will execute the demo - the default value assigned to second. as thres no first word, demo will be considered as first word.
        // eg: my name_is likhita
        //     hope your are doing_well
        //     this is_a concept of dom
        //  this is a sample text example and each line will be splitted as per line 10 and will be stored in rows. this each row will again be split up at _

        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        // first word will be same and second word's first letter will be converted to upper case and joined together as theres no space given as per code written here.

        console.log(`${output.padEnd(20)}${''.repeat(i+1)}`);
        // adding empty space at the end via padEnd upto 20 chars. and all this will be repeated for i times -> runs a loop.
    }
});