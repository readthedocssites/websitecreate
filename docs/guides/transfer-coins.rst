Transferring Coins to Your Trezor
===============================

This guide explains how to safely transfer cryptocurrency from an exchange or another wallet to your Trezor device.

Understanding Addresses
---------------------

Each cryptocurrency has its own address format. Your Trezor can generate unique receiving addresses for each supported cryptocurrency.

Receiving Cryptocurrency
----------------------

Step 1: Open Trezor Suite
^^^^^^^^^^^^^^^^^^^^^^^

1. Connect your Trezor to your computer
2. Enter your PIN when prompted
3. Open Trezor Suite

Step 2: Select the Cryptocurrency
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. In Trezor Suite, select the cryptocurrency you want to receive (e.g., Bitcoin, Ethereum)
2. Click on the "Receive" tab

Step 3: Generate a Receiving Address
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Click "Generate new address"
2. Your Trezor device will ask you to confirm the address
3. Verify that the address shown in Trezor Suite matches the one on your device
4. Confirm on your Trezor

.. warning::
   Always verify the address on your Trezor device screen. This protects against malware that might display a different address on your computer.

Step 4: Send Funds to Your Address
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

From an Exchange:
^^^^^^^^^^^^^^^^^^^

1. Log in to your exchange account
2. Navigate to the withdrawal section
3. Select the cryptocurrency you want to transfer
4. Paste your Trezor receiving address
5. Enter the amount to send
6. Confirm the withdrawal according to the exchange's process

From Another Wallet:
^^^^^^^^^^^^^^^^^^^^^

1. Open your other wallet
2. Select send or transfer
3. Enter your Trezor receiving address
4. Specify the amount
5. Confirm the transaction

Step 5: Verify the Transaction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. In Trezor Suite, you'll see a pending transaction appear
2. Wait for the network confirmations (the number required varies by cryptocurrency)
3. Once confirmed, your balance will update

Best Practices for Transfers
--------------------------

Test Transactions
^^^^^^^^^^^^^^^

For large transfers, always send a small test amount first to verify everything works correctly.

Transaction Fees
^^^^^^^^^^^^^

* Higher fees generally mean faster confirmation times
* Consider the urgency of your transfer when selecting fees
* For Bitcoin, you can use custom fees in Trezor Suite

Security Considerations
^^^^^^^^^^^^^^^^^^^^

* Triple-check addresses before sending
* Be aware of network congestion that might delay transactions
* Keep your device connected until the transaction is broadcast
* For large amounts, consider breaking the transfer into smaller transactions

Troubleshooting Common Issues
---------------------------

Transaction Not Appearing
^^^^^^^^^^^^^^^^^^^^^^^

If your transaction doesn't appear in Trezor Suite:

1. Check the transaction ID (TXID) on a blockchain explorer
2. Verify you sent to the correct address
3. Ensure you selected the correct cryptocurrency network (e.g., Bitcoin vs. Bitcoin Cash)
4. Try refreshing Trezor Suite or restarting the application

Stuck Transactions
^^^^^^^^^^^^^^^

For Bitcoin transactions with low fees that aren't confirming:

1. Some wallets support RBF (Replace-By-Fee) to increase the fee
2. For advanced users, you can try using CPFP (Child Pays For Parent) techniques
3. Sometimes waiting is the only option

.. raw:: html

   <div class="cta-container">
     <a href="backup.html" class="cta-button">Next: Learn about backup strategies</a>
   </div>