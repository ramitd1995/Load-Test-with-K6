Install k6 : brew install k6
IDE : Visual Studio

k6 test run command : k6 run withexecutor.js
View current running status of k6 script : k6 status
Run script with env varible value : k6 run -e USER_ID=2 withenvvariable.js
Pass/Override vu's and duration from command line : k6 run -e USER_ID=2 --duration 10s --vus 10 withenvvariable.js

Install Netdata (APM) : brew install netdata
Run netdata : brew services start netdata  // default port is 19999
Results to be published on k6 statsd from where APM pulls the data for monitoring.
Run test with command : k6 run --out statsd withexecutor.js

Notes:

1. To send multiple requests parallely with same vu, make use of http.batch
2. For using same array amoung multiple vu for read only purpose, make use of sharedarray
3. To run same function with different thread config(number of vu's, executor, iterations etc), make use of scenarios
4. To increase vu's in runtime(while the script is already running), make use of externally-controlled executor 
5. To apply threshold only on specific requests, make use of k6 groups


To be done :

1. tags
2. groups
3. k6 html report