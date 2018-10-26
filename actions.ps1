

$scriptpath = $MyInvocation.MyCommand.Path
$dir = Split-Path $scriptpath


function StartIISSite($username, $password, $serverIpAddress, $siteName) {
    try {
        Set-Location $dir
        Write-Host "Starting site $siteName...." -ForegroundColor Green
        $output = cmd /s /c "PsExec64.exe -s \\$serverIpAddress -u $username -p $password C:\windows\system32\inetsrv\appcmd start site $siteName"
        if (!$?) {
            throw "StartIISSite failed."
        }
        Write-Host "Checking " $? -ForegroundColor Yellow
        Write-Host "Started site $siteName successfully." -ForegroundColor Green
    }
    catch {
        Write-Host "StartIISSite failed." -ForegroundColor Red
        Exit
    }	
}

function StopIISSite($username, $password, $serverIpAddress, $siteName) {
    try {
        Set-Location $dir
        Write-Host "Stopping site $siteName...." -ForegroundColor Green
        $output = cmd /s /c "PsExec64.exe -s \\$serverIpAddress -u $username -p $password C:\windows\system32\inetsrv\appcmd stop site $siteName"
        if (!$?) {
            throw "StopIISSite failed."
        }
        Write-Host "Checking " $? -ForegroundColor Yellow
        Write-Host "Stopped site $siteName successfully." -ForegroundColor Green
    }
    catch {
        Write-Host "StopIISSite failed." -ForegroundColor Red
        Exit
    }		
}
