results = [
{
  "appName": "Alexa Skills",
  "key": "app_name1",
  "valueApp1": "Alexa Skills",
  "valueApp2": "Alexa स्किल",
  "isEqual": false
},
{
  "appName": "Amazon Devices",
  "key": "app_name2",
  "valueApp1": "Amazon Devices",
  "valueApp2": "Amazon डिवाइस",
  "isEqual": false
},
{
  "appName": "Amazon Fashion",
  "key": "app_name3",
  "valueApp1": "Amazon Fashion",
  "valueApp2": "Amazon फैशन",
  "isEqual": false
},
{
  "appName": "Amazon Fresh",
  "key": "app_name4",
  "valueApp1": "Amazon Fresh",
  "valueApp2": "Amazon Fresh",
  "isEqual": true
},
{
  "appName": "Amazon Pharmacy",
  "key": "app_name5",
  "valueApp1": "Amazon Pharmacy",
  "valueApp2": "Amazon Pharmacy",
  "isEqual": true
},
{
  "appName": "Appliances",
  "key": "app_name6",
  "valueApp1": "Appliances",
  "valueApp2": "उपकरण",
  "isEqual": false
},
{
  "appName": "Apps & Games",
  "key": "app_name7",
  "valueApp1": "Apps & Games",
  "valueApp2": "ऐप और गेम",
  "isEqual": false
},
{
  "appName": "Audible Audiobooks",
  "key": "app_name8",
  "valueApp1": "Audible Audiobooks",
  "valueApp2": "Audible ऑडियोबुक",
  "isEqual": false
}]

appNames_hin = [
  "Alexa स्किल",
  "Amazon डिवाइस",
  "Amazon फैशन",
  "Amazon Fresh",
  "Amazon Pharmacy",
  "उपकरण",
  "ऐप और गेम",
  "Audible ऑडियोबुक"
]

for result in results:
    for app in appNames_hin:
        if result["valueApp2"] == app:
            print(f"'{result['valueApp2']}': matches {appNames_hin.index(app)}='{appNames_hin[appNames_hin.index(app)]}'")
