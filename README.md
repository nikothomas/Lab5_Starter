# Lab 5 - Starter

1. You would not use unit tests to test the "message" feature. It involves many different components, and it would be better to test each of them individually. For example if you have encryption you could test if it's encrypting and decrypting strings correctly, and separately test server connection, etc.
2. Yes, you would use a unit test to check if your message length limit is applied correctly. This is a small component, likely with only a couple points of possible failure.