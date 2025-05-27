Recovery Procedures
=================

This guide explains how to recover your wallet if your Trezor device is lost, damaged, or reset.

When to Recover
-------------

You'll need to recover your wallet if:

* Your device is lost or stolen
* Your device is damaged and no longer works
* You've reset your device
* You want to access your wallet on a new Trezor device
* You suspect your device may be compromised

Prerequisites for Recovery
------------------------

Before starting the recovery process, ensure you have:

* Your recovery seed (12, 18, or 24 words)
* A Trezor device (new or reset)
* The latest version of Trezor Suite
* A secure, private environment

Standard Recovery Process
-----------------------

Step 1: Prepare Your Environment
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Disconnect from the internet if possible
2. Ensure no one can see your screen or your recovery seed
3. Close unnecessary applications
4. Be aware of any cameras in the room

Step 2: Connect Your Device
^^^^^^^^^^^^^^^^^^^^^^^^^

1. Connect your Trezor to your computer
2. Open Trezor Suite
3. When prompted to set up your device, select "Recover wallet"

Step 3: Enter Recovery Information
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Follow the on-screen instructions
2. Select the correct number of words in your seed (12, 18, or 24)
3. If you used a passphrase, you'll need to enable passphrase protection and enter it after recovery

Step 4: Enter Your Recovery Seed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Depending on your Trezor model, you'll enter your seed in one of two ways:

For Trezor Model One:
^^^^^^^^^^^^^^^^^^^^

1. Trezor Suite will show a matrix of letters
2. Look at the first letter of your recovery word
3. Click the position in the matrix that contains that letter
4. Select the correct word from the resulting list
5. Repeat for all words

For Trezor Model T:
^^^^^^^^^^^^^^^^^

1. Type your recovery words directly on the Trezor touchscreen
2. The device will offer word suggestions as you type
3. Tap to select the correct word
4. Repeat for all words

Step 5: Set a New PIN
^^^^^^^^^^^^^^^^^^

1. Create a new PIN for your device
2. Confirm the PIN
3. Wait for the recovery process to complete

Advanced Recovery Options
-----------------------

Recovering with Shamir Backup
^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you used Shamir Backup:

1. Select "Recover wallet" in Trezor Suite
2. Choose "Shamir Backup" when prompted
3. Enter the number of shares you have
4. Enter each share when prompted
5. You'll need the threshold number of shares to complete recovery

Recovering with a Passphrase
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you used a passphrase:

1. Complete the standard recovery with your seed words
2. Enable passphrase protection in device settings
3. Enter your passphrase when connecting to the device
4. This will unlock your passphrase-protected wallet

Troubleshooting Recovery Issues
-----------------------------

Incorrect Balances After Recovery
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If your balance is incorrect after recovery:

1. Check if you're using the correct passphrase (if applicable)
2. Verify you've selected the correct cryptocurrency account
3. Try adding accounts to discover additional funds
4. Check that the recovery seed you used is correct

Missing Transactions
^^^^^^^^^^^^^^^^^

If transactions are missing:

1. Wait for Trezor Suite to fully synchronize
2. Check if the transactions are on a different account
3. Verify the blockchain explorer shows the transactions for your addresses

After Successful Recovery
-----------------------

Once you've recovered your wallet:

1. Verify all accounts and balances are correct
2. Consider creating a new wallet and transferring funds if the original was compromised
3. Review your security practices
4. Update your backup strategy if needed

.. raw:: html

   <div class="cta-container">
     <a href="../support/troubleshooting.html" class="cta-button">Troubleshooting Guide</a>
   </div>