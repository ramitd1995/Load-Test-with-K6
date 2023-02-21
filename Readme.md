<p class="has-line-data" data-line-start="0" data-line-end="2">Install k6 : brew install k6<br>
IDE : Visual Studio</p>
<p class="has-line-data" data-line-start="3" data-line-end="7">k6 test run command : k6 run withexecutor.js<br>
View current running status of k6 script : k6 status<br>
Run script with env varible value : k6 run -e USER_ID=2 withenvvariable.js<br>
Pass/Override vu’s and duration from command line : k6 run -e USER_ID=2 --duration 10s --vus 10 withenvvariable.js</p>
<p class="has-line-data" data-line-start="8" data-line-end="12">Install Netdata (APM) : brew install netdata<br>
Run netdata : brew services start netdata  // default port is 19999<br>
Results to be published on k6 statsd from where APM pulls the data for monitoring.<br>
Run test with command : k6 run --out statsd withexecutor.js</p>
<p class="has-line-data" data-line-start="13" data-line-end="14">Notes:</p>
<ol>
<li class="has-line-data" data-line-start="15" data-line-end="16">To send multiple requests parallely with same vu, make use of http.batch</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">For using same array amoung multiple vu for read only purpose, make use of sharedarray</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">To run same function with different thread config(number of vu’s, executor, iterations etc), make use of scenarios</li>
<li class="has-line-data" data-line-start="18" data-line-end="19">To increase vu’s in runtime(while the script is already running), make use of externally-controlled executor</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">To apply threshold only on specific requests, make use of k6 groups</li>
</ol>
<p class="has-line-data" data-line-start="22" data-line-end="23">To be done :</p>
<ol>
<li class="has-line-data" data-line-start="24" data-line-end="25">tags</li>
<li class="has-line-data" data-line-start="25" data-line-end="26">groups</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">k6 html report</li>
</ol>