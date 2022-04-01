@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist D:\Xampp\hypersonic\scripts\ctl.bat (start /MIN /B D:\Xampp\server\hsql-sample-database\scripts\ctl.bat START)
if exist D:\Xampp\ingres\scripts\ctl.bat (start /MIN /B D:\Xampp\ingres\scripts\ctl.bat START)
if exist D:\Xampp\mysql\scripts\ctl.bat (start /MIN /B D:\Xampp\mysql\scripts\ctl.bat START)
if exist D:\Xampp\postgresql\scripts\ctl.bat (start /MIN /B D:\Xampp\postgresql\scripts\ctl.bat START)
if exist D:\Xampp\apache\scripts\ctl.bat (start /MIN /B D:\Xampp\apache\scripts\ctl.bat START)
if exist D:\Xampp\openoffice\scripts\ctl.bat (start /MIN /B D:\Xampp\openoffice\scripts\ctl.bat START)
if exist D:\Xampp\apache-tomcat\scripts\ctl.bat (start /MIN /B D:\Xampp\apache-tomcat\scripts\ctl.bat START)
if exist D:\Xampp\resin\scripts\ctl.bat (start /MIN /B D:\Xampp\resin\scripts\ctl.bat START)
if exist D:\Xampp\jetty\scripts\ctl.bat (start /MIN /B D:\Xampp\jetty\scripts\ctl.bat START)
if exist D:\Xampp\subversion\scripts\ctl.bat (start /MIN /B D:\Xampp\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist D:\Xampp\lucene\scripts\ctl.bat (start /MIN /B D:\Xampp\lucene\scripts\ctl.bat START)
if exist D:\Xampp\third_application\scripts\ctl.bat (start /MIN /B D:\Xampp\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist D:\Xampp\third_application\scripts\ctl.bat (start /MIN /B D:\Xampp\third_application\scripts\ctl.bat STOP)
if exist D:\Xampp\lucene\scripts\ctl.bat (start /MIN /B D:\Xampp\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist D:\Xampp\subversion\scripts\ctl.bat (start /MIN /B D:\Xampp\subversion\scripts\ctl.bat STOP)
if exist D:\Xampp\jetty\scripts\ctl.bat (start /MIN /B D:\Xampp\jetty\scripts\ctl.bat STOP)
if exist D:\Xampp\hypersonic\scripts\ctl.bat (start /MIN /B D:\Xampp\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist D:\Xampp\resin\scripts\ctl.bat (start /MIN /B D:\Xampp\resin\scripts\ctl.bat STOP)
if exist D:\Xampp\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT D:\Xampp\apache-tomcat\scripts\ctl.bat STOP)
if exist D:\Xampp\openoffice\scripts\ctl.bat (start /MIN /B D:\Xampp\openoffice\scripts\ctl.bat STOP)
if exist D:\Xampp\apache\scripts\ctl.bat (start /MIN /B D:\Xampp\apache\scripts\ctl.bat STOP)
if exist D:\Xampp\ingres\scripts\ctl.bat (start /MIN /B D:\Xampp\ingres\scripts\ctl.bat STOP)
if exist D:\Xampp\mysql\scripts\ctl.bat (start /MIN /B D:\Xampp\mysql\scripts\ctl.bat STOP)
if exist D:\Xampp\postgresql\scripts\ctl.bat (start /MIN /B D:\Xampp\postgresql\scripts\ctl.bat STOP)

:end

