---
date: 2025-01-29
title: 'Automate Reboot Reminders for Users with This PowerShell Script'
description: "Automate reboot reminders for Windows users. Prevent delays, enforce restarts, and improve system stability with this easy-to-deploy PowerShell script."
tags: [powershell, scripts, MSP, IT]
mastodon_url: https://infosec.exchange/@beardedtechguy/113912748097776817
---

In IT environments, regular system reboots are essential for maintaining performance, applying security updates, and ensuring overall system stability.

This is a challenge I've encountered recently. In our client's environments, some users shut down their endpoints, preventing scheduled restarts from executing through our MSP software. Recently, I needed to update our backup software to a newer version, which required uninstalling the older version and installing the latest one. Since a full removal requires a reboot, I needed a way to remotely ensure this process was completed professionally while minimizing disruption to the user. However, users often delay reboots, leading to performance issues and potential security risks. To solve this, I created a PowerShell script that automatically reminds users to reboot while still allowing flexibility before enforcing a system restart.

## Why This Script Is Useful

- **Automated Reboot Reminders** – Users get notified every 10 minutes to reboot.

- **User-Friendly Prompts** – Users can choose to delay the reboot.

- **Final Forced Reboot** – If they ignore the reminders, the system enforces a reboot after one hour.

- **Silent Deployment** – IT admins can push this script remotely using SCCM, Intune, or PDQ Deploy.

## How the Script Works

1. **Checks if a user is logged in:**

    - If no user is logged in, the system reboots immediately (after a 60-second warning).

    - If a user is present, they receive a reboot prompt every 10 minutes.

2. **Provides an option to delay the reboot:**

    - Users can click "Yes" to reboot immediately.

    - If they choose "No," the script waits 10 minutes before prompting again.

3. **Forces a reboot after 1 hour:**

    - A final warning message informs the user that a reboot is unavoidable.

    - A 30-second countdown begins before the system reboots.

## The PowerShell Script

Here’s the full script:

```powershell
# Load Windows Forms & Drawing for UI elements
[void][System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")
[void][System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

# Set timing
$StartTime = Get-Date
$EndTime = $StartTime.AddMinutes(60)

# Check if a user is logged in
$UserLoggedIn = (Get-WmiObject -Class Win32_ComputerSystem).UserName
if (-not $UserLoggedIn) {
    Write-Host "No user is logged in. Rebooting immediately..."
    shutdown -r -f -t 60  # 60-second countdown
    Exit
}

Write-Host "User detected: $UserLoggedIn. Starting reboot prompt sequence..."

# Main loop to prompt every 10 minutes
Do {
    $TimeNow = Get-Date
    if ($TimeNow -ge $EndTime) {
        Write-Host "Time expired! Showing final warning..."
        
        # Show final warning message
        Add-Type -AssemblyName Microsoft.VisualBasic
        [Microsoft.VisualBasic.Interaction]::MsgBox(
            "Your time limit has been reached. Your computer will restart in 30 seconds.",
            "OKOnly,MsgBoxSetForeground,Exclamation",
            "Final Warning: Restarting Soon"
        )

        Write-Host "Final countdown started: 30 seconds..."
        shutdown -r -f -t 30  # 30-second countdown before forced reboot
        Exit
    }

    # Show reminder notification
    $Balloon = New-Object System.Windows.Forms.NotifyIcon
    $Balloon.Icon = [System.Drawing.SystemIcons]::Information
    $Balloon.BalloonTipText = "IT requires a reboot for system stability. Please reboot at your earliest convenience."
    $Balloon.BalloonTipTitle = "Reboot Required"
    $Balloon.Visible = $true
    $Balloon.ShowBalloonTip(20000)

    # Ask the user
    Add-Type -AssemblyName Microsoft.VisualBasic
    $response = [Microsoft.VisualBasic.Interaction]::MsgBox(
        "Would you like to reboot your machine now?",
        "YesNo,MsgBoxSetForeground,Question",
        "System Maintenance"
    )

    if ($response -eq "Yes") {
        Write-Host "User chose to reboot. Restarting now..."
        shutdown -r -f
        Exit
    }

    Write-Host "User delayed the reboot. Will prompt again in 10 minutes..."
    Start-Sleep -Seconds 600  # Wait for 10 minutes before next prompt

} Until ($TimeNow -ge $EndTime)

# If the script reaches here, the final reboot countdown has already started.
Write-Host "Script execution complete. System will reboot in 30 seconds."
```

## How to Deploy This Script Remotely

To deploy this script to multiple computers, use **PowerShell Remoting** or an IT management tool like **SCCM, PDQ Deploy, or Intune**.

### **Run the Script on a Remote Computer**

Use this command to push the script remotely:

```powershell
Invoke-Command -ComputerName TargetPC -FilePath C:\Path\To\RebootReminder.ps1
```

For more details on PowerShell Remoting, check out [Microsoft's official documentation](https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/).

### **Run as SYSTEM for Full Permissions**

Make sure the script runs with elevated privileges by executing it as **SYSTEM** or **Administrator**. For guidance on running PowerShell scripts with administrative privileges, refer to [Microsoft’s PowerShell Execution Policy documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies).

## Final Thoughts

This script is a great way to **ensure timely reboots** while giving users some control before enforcing the restart. IT teams can **improve compliance**, **enhance system stability**, and **reduce help desk tickets related to pending updates**.

If you found this useful, let me know how it works for you or if you’d like additional features! 🚀