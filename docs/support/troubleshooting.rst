Troubleshooting Guide
===================

This guide helps you resolve common issues with your Trezor device.

Connection Issues
---------------

Device Not Recognized
^^^^^^^^^^^^^^^^^^

If your Trezor isn't detected:

1. Try a different USB cable, preferably the one provided with your device
2. Connect directly to your computer (avoid hubs or extensions)
3. Try different USB ports
4. Restart your computer
5. Try another computer if available

For Model One:
^^^^^^^^^^^^^

6. Press and hold both buttons while connecting to enter bootloader mode

For Model T:
^^^^^^^^^^^

6. Swipe your finger across the screen while connecting to enter bootloader mode

Driver Issues
^^^^^^^^^^^

On Windows:
^^^^^^^^^^

1. Check Device Manager for unknown devices
2. Update Windows to the latest version
3. Install Trezor Bridge from trezor.io/start

On Mac:
^^^^^^

1. Check System Report > USB for Trezor device
2. Restart your computer
3. Try a different user account

On Linux:
^^^^^^^^

1. Check if you have the correct udev rules installed
2. Run `lsusb` to check if the device is detected
3. Try running Trezor Suite with admin privileges

Firmware and Software Issues
--------------------------

Firmware Update Failed
^^^^^^^^^^^^^^^^^^^

If a firmware update fails:

1. Disconnect and reconnect your device
2. Try a different USB port or cable
3. Make sure your computer doesn't go to sleep during the update
4. For Model One: hold both buttons while connecting to restart in bootloader mode
5. For Model T: swipe your finger on the screen while connecting

Unable to Install Trezor Suite
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you can't install Trezor Suite:

1. Check if you have administrator rights on your computer
2. Disable antivirus temporarily (it might block the installation)
3. Download the latest version from trezor.io/suite
4. Try the web version at suite.trezor.io

Wallet Access Issues
------------------

Incorrect PIN
^^^^^^^^^^^

If you enter an incorrect PIN:

1. The wait time doubles after each incorrect attempt
2. After 16 incorrect attempts, the device wipes itself
3. You can still recover your wallet using your recovery seed

If you forgot your PIN:
^^^^^^^^^^^^^^^^^^^^^

1. Reset your device (this will wipe it)
2. Recover using your recovery seed
3. Set a new PIN

Recovery Seed Issues
^^^^^^^^^^^^^^^^^

If you're having trouble with recovery:

1. Make sure you're entering words in the correct order
2. Check that all words are spelled correctly and from the BIP39 wordlist
3. Verify you're using the correct number of words (12, 18, or 24)
4. For passphrase-protected wallets, ensure you're entering the correct passphrase

Transaction Problems
-----------------

Transaction Stuck
^^^^^^^^^^^^^^^

For Bitcoin transactions that aren't confirming:

1. Check the transaction status on a blockchain explorer
2. For replace-by-fee enabled transactions, you can try to accelerate it
3. For stuck transactions, sometimes waiting is necessary during network congestion

Transaction Sending Failed
^^^^^^^^^^^^^^^^^^^^^^^

If you can't send a transaction:

1. Verify you have sufficient funds (including for network fees)
2. Check your internet connection
3. Ensure your device firmware is up to date
4. For ETH/ERC-20, check you have ETH for gas fees

Advanced Troubleshooting
----------------------

Recovery Mode
^^^^^^^^^^^

If your device is not functioning properly:

For Model One:
^^^^^^^^^^^^^

1. Disconnect your device
2. Hold both buttons
3. While holding both buttons, connect the device
4. Continue holding until "Recovery mode" appears

For Model T:
^^^^^^^^^^^

1. Disconnect your device
2. Swipe your finger across the screen
3. While swiping, connect the device
4. Continue swiping until "Recovery mode" appears

Factory Reset
^^^^^^^^^^^

.. warning::
   Factory reset will erase your device! Only proceed if you have your recovery seed.

For Model One:
^^^^^^^^^^^^^

1. Go to settings in Trezor Suite
2. Select "Device" tab
3. Click "Factory reset"
4. Confirm on your device

For Model T:
^^^^^^^^^^^

1. Go to settings in Trezor Suite
2. Select "Device" tab
3. Click "Factory reset"
4. Confirm on your device touchscreen

When to Contact Support
--------------------

Contact Trezor support if:

* Your device shows signs of physical damage
* You experience issues not solved by this guide
* You see unexpected behavior during device operation
* You need assistance with complex recovery situations

.. raw:: html

   <div class="cta-container">
     <a href="contact.html" class="cta-button">Contact Support</a>
   </div>