*** Settings ***
Library    OperatingSystem
Library    Browser

Library    ../py-utils/py_output_file.py

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
    
    Write List To File    ${list_innertext}    output-data-en.txt
    Txt To Json    data/output-data-en.txt    data/output-data-en.json

    Hover    id=icp-nav-flyout
    Click    (//*[@href="#switch-lang=hi_IN"])[1]
    Sleep    2s
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
    Write List To File    ${list_innertext}    output-data-hin.txt
    Txt To Json    data/output-data-hin.txt    data/output-data-hin.json
