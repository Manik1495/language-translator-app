*** Settings ***
Library    OperatingSystem
Library    Browser

Library    ../py-utils/utils.py

*** Variables ***


*** Keywords ***

*** Test Cases ***

Goto Amazon and store data
    New Browser    Chromium    headless=false
    New Page    https://www.amazon.in/
    Wait For Elements State    text=AmazonBasics    visible    30s
    Log    ${CURDIR}
    ${list_innertext}=    Evaluate JavaScript    ${None}
        ...    ()=> {
            ...    const bodyInnerText = document.body.innerText;
            ...    const innerTextLines = bodyInnerText.split('\\n');
            ...    const innerTextArray = [];
            ...    innerTextLines.forEach(line => {
            ...        const trimmedLine = line.trim();
            ...        if (trimmedLine !== '') {
            ...        innerTextArray.push(trimmedLine);
            ...        }
            ...    });
            ...    return innerTextArray;            
        ...    }
    
    Log    ${list_innertext}
    
